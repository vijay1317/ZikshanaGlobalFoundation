package org.zikshana.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

@Service
public class RazorpayService {

    @Value("${app.razorpay.key-id}")
    private String razorpayKeyId;

    @Value("${app.razorpay.key-secret}")
    private String razorpayKeySecret;

    private RazorpayClient razorpayClient;

    private RazorpayClient getRazorpayClient() throws RazorpayException {
        if (razorpayClient == null) {
            razorpayClient = new RazorpayClient(razorpayKeyId, razorpayKeySecret);
        }
        return razorpayClient;
    }

    /**
     * Create a Razorpay order
     * @param amount Amount in rupees (will be converted to paise)
     * @param currency Currency code (default: INR)
     * @param receipt Receipt ID for reference
     * @return Order details as Map
     */
    public Map<String, Object> createOrder(BigDecimal amount, String currency, String receipt) throws RazorpayException {
        try {
            RazorpayClient client = getRazorpayClient();

            // Convert amount to paise (1 rupee = 100 paise)
            int amountInPaise = amount.multiply(new BigDecimal("100")).intValue();

            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", amountInPaise);
            orderRequest.put("currency", currency != null ? currency : "INR");
            orderRequest.put("receipt", receipt);

            Order order = client.orders.create(orderRequest);

            Map<String, Object> orderData = new HashMap<>();
            orderData.put("orderId", order.get("id"));
            orderData.put("amount", order.get("amount"));
            orderData.put("currency", order.get("currency"));
            orderData.put("receipt", order.get("receipt"));
            orderData.put("status", order.get("status"));

            return orderData;
        } catch (RazorpayException e) {
            throw new RazorpayException("Failed to create Razorpay order: " + e.getMessage());
        }
    }

    /**
     * Verify Razorpay payment signature
     * @param orderId Razorpay order ID
     * @param paymentId Razorpay payment ID
     * @param signature Razorpay signature
     * @return true if signature is valid, false otherwise
     */
    public boolean verifyPaymentSignature(String orderId, String paymentId, String signature) {
        try {
            String payload = orderId + "|" + paymentId;

            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(
                razorpayKeySecret.getBytes(StandardCharsets.UTF_8),
                "HmacSHA256"
            );
            mac.init(secretKeySpec);

            byte[] hash = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
            StringBuilder hexString = new StringBuilder();

            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }

            String generatedSignature = hexString.toString();
            return generatedSignature.equals(signature);

        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            return false;
        }
    }

    /**
     * Alternative verification using Razorpay Utils
     * @param orderId Razorpay order ID
     * @param paymentId Razorpay payment ID
     * @param signature Razorpay signature
     * @return true if signature is valid, false otherwise
     */
    public boolean verifyPaymentSignatureWithUtils(String orderId, String paymentId, String signature) {
        try {
            JSONObject attributes = new JSONObject();
            attributes.put("razorpay_order_id", orderId);
            attributes.put("razorpay_payment_id", paymentId);
            attributes.put("razorpay_signature", signature);

            Utils.verifyPaymentSignature(attributes, razorpayKeySecret);
            return true;
        } catch (RazorpayException e) {
            return false;
        }
    }

    /**
     * Get Razorpay key ID for frontend
     * @return Razorpay key ID
     */
    public String getRazorpayKeyId() {
        return razorpayKeyId;
    }
}
