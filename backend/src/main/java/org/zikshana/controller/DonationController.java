package org.zikshana.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zikshana.dto.DonationDto;
import org.zikshana.service.DonationService;
import org.zikshana.service.RazorpayService;
import com.razorpay.RazorpayException;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/donations")
@CrossOrigin(origins = "*")
public class DonationController {

    @Autowired
    private DonationService donationService;

    @Autowired
    private RazorpayService razorpayService;

    @PostMapping
    public ResponseEntity<DonationDto> createDonation(@Valid @RequestBody DonationDto donationDto) {
        try {
            DonationDto createdDonation = donationService.createDonation(donationDto);
            return new ResponseEntity<>(createdDonation, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<DonationDto> getDonationById(@PathVariable Long id) {
        try {
            DonationDto donation = donationService.getDonationById(id);
            return new ResponseEntity<>(donation, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/transaction/{transactionId}")
    public ResponseEntity<DonationDto> getDonationByTransactionId(@PathVariable String transactionId) {
        try {
            DonationDto donation = donationService.getDonationByTransactionId(transactionId);
            return new ResponseEntity<>(donation, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<DonationDto>> getAllDonations() {
        try {
            List<DonationDto> donations = donationService.getAllDonations();
            return new ResponseEntity<>(donations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<DonationDto>> getDonationsByEmail(@PathVariable String email) {
        try {
            List<DonationDto> donations = donationService.getDonationsByEmail(email);
            return new ResponseEntity<>(donations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/program/{programId}")
    public ResponseEntity<List<DonationDto>> getDonationsByProgramId(@PathVariable Long programId) {
        try {
            List<DonationDto> donations = donationService.getDonationsByProgramId(programId);
            return new ResponseEntity<>(donations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/payment-status/{transactionId}")
    public ResponseEntity<DonationDto> updatePaymentStatus(
            @PathVariable String transactionId,
            @RequestBody Map<String, String> paymentDetails) {
        try {
            String status = paymentDetails.get("status");
            String razorpayPaymentId = paymentDetails.get("razorpayPaymentId");
            String razorpaySignature = paymentDetails.get("razorpaySignature");

            DonationDto updatedDonation = donationService.updatePaymentStatus(
                    transactionId, status, razorpayPaymentId, razorpaySignature);
            return new ResponseEntity<>(updatedDonation, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/stats/total-amount")
    public ResponseEntity<Map<String, BigDecimal>> getTotalDonationsAmount() {
        try {
            BigDecimal total = donationService.getTotalDonationsAmount();
            Map<String, BigDecimal> response = new HashMap<>();
            response.put("totalAmount", total);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/stats/total-count")
    public ResponseEntity<Map<String, Long>> getTotalDonationsCount() {
        try {
            Long count = donationService.getTotalDonationsCount();
            Map<String, Long> response = new HashMap<>();
            response.put("totalCount", count);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/recent")
    public ResponseEntity<List<DonationDto>> getRecentDonations() {
        try {
            List<DonationDto> donations = donationService.getRecentDonations();
            return new ResponseEntity<>(donations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Razorpay Integration Endpoints

    @PostMapping("/razorpay/create-order")
    public ResponseEntity<Map<String, Object>> createRazorpayOrder(@RequestBody Map<String, Object> orderRequest) {
        try {
            BigDecimal amount = new BigDecimal(orderRequest.get("amount").toString());
            String currency = orderRequest.getOrDefault("currency", "INR").toString();
            String receipt = orderRequest.getOrDefault("receipt", "donation_" + System.currentTimeMillis()).toString();

            Map<String, Object> orderData = razorpayService.createOrder(amount, currency, receipt);

            // Add Razorpay key for frontend
            orderData.put("key", razorpayService.getRazorpayKeyId());

            return new ResponseEntity<>(orderData, HttpStatus.OK);
        } catch (RazorpayException e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Failed to create order: " + e.getMessage());
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/razorpay/verify-payment")
    public ResponseEntity<Map<String, Object>> verifyRazorpayPayment(@RequestBody Map<String, String> paymentData) {
        try {
            String orderId = paymentData.get("razorpay_order_id");
            String paymentId = paymentData.get("razorpay_payment_id");
            String signature = paymentData.get("razorpay_signature");
            String transactionId = paymentData.get("transaction_id");

            boolean isValid = razorpayService.verifyPaymentSignature(orderId, paymentId, signature);

            Map<String, Object> response = new HashMap<>();
            response.put("verified", isValid);

            if (isValid && transactionId != null) {
                // Update donation status
                DonationDto updatedDonation = donationService.updatePaymentStatus(
                    transactionId, "SUCCESS", paymentId, signature
                );
                response.put("donation", updatedDonation);
                response.put("message", "Payment verified successfully");
            } else if (!isValid) {
                response.put("message", "Payment verification failed");
            }

            return new ResponseEntity<>(response, isValid ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("verified", false);
            error.put("error", e.getMessage());
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/razorpay/key")
    public ResponseEntity<Map<String, String>> getRazorpayKey() {
        Map<String, String> response = new HashMap<>();
        response.put("key", razorpayService.getRazorpayKeyId());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
