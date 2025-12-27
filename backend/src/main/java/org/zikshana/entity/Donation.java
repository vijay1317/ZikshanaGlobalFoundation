package org.zikshana.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.math.BigDecimal;

@Entity
@Table(name = "donations")
public class Donation extends BaseEntity {

    @NotBlank(message = "Donor name is required")
    @Size(max = 100)
    @Column(name = "donor_name", length = 100, nullable = false)
    private String donorName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(max = 150)
    @Column(name = "donor_email", length = 150, nullable = false)
    private String donorEmail;

    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Mobile number must be 10 digits")
    @Column(name = "donor_mobile", length = 15, nullable = false)
    private String donorMobile;

    @NotBlank(message = "Address is required")
    @Column(name = "donor_address", columnDefinition = "TEXT", nullable = false)
    private String donorAddress;

    @NotBlank(message = "Pincode is required")
    @Pattern(regexp = "^[0-9]{6}$", message = "Pincode must be 6 digits")
    @Column(name = "donor_pincode", length = 6, nullable = false)
    private String donorPincode;

    @Size(max = 10)
    @Pattern(regexp = "^$|^[A-Z]{5}[0-9]{4}[A-Z]{1}$", message = "Invalid PAN format")
    @Column(name = "donor_pan", length = 10)
    private String donorPan;

    @NotNull(message = "Donation amount is required")
    @DecimalMin(value = "100.0", message = "Minimum donation amount is ₹100")
    @Column(name = "amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal amount;

    @Column(name = "tip_amount", precision = 10, scale = 2)
    private BigDecimal tipAmount = BigDecimal.ZERO;

    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount;

    @Column(name = "is_anonymous")
    private Boolean isAnonymous = false;

    @Column(name = "whatsapp_updates")
    private Boolean whatsappUpdates = true;

    @Column(name = "is_indian_citizen", nullable = false)
    private Boolean isIndianCitizen = true;

    @Column(name = "gift_card_code")
    private String giftCardCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "program_id")
    private Program program;

    @Column(name = "transaction_id", unique = true)
    private String transactionId;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_status", nullable = false)
    private PaymentStatus paymentStatus = PaymentStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method")
    private PaymentMethod paymentMethod;

    @Column(name = "razorpay_order_id")
    private String razorpayOrderId;

    @Column(name = "razorpay_payment_id")
    private String razorpayPaymentId;

    @Column(name = "razorpay_signature")
    private String razorpaySignature;

    @Column(name = "tax_certificate_issued")
    private Boolean taxCertificateIssued = false;

    @Column(name = "tax_certificate_number")
    private String taxCertificateNumber;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

    // Getters and Setters

    public String getDonorName() {
        return donorName;
    }

    public void setDonorName(String donorName) {
        this.donorName = donorName;
    }

    public String getDonorEmail() {
        return donorEmail;
    }

    public void setDonorEmail(String donorEmail) {
        this.donorEmail = donorEmail;
    }

    public String getDonorMobile() {
        return donorMobile;
    }

    public void setDonorMobile(String donorMobile) {
        this.donorMobile = donorMobile;
    }

    public String getDonorAddress() {
        return donorAddress;
    }

    public void setDonorAddress(String donorAddress) {
        this.donorAddress = donorAddress;
    }

    public String getDonorPincode() {
        return donorPincode;
    }

    public void setDonorPincode(String donorPincode) {
        this.donorPincode = donorPincode;
    }

    public String getDonorPan() {
        return donorPan;
    }

    public void setDonorPan(String donorPan) {
        this.donorPan = donorPan;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public BigDecimal getTipAmount() {
        return tipAmount;
    }

    public void setTipAmount(BigDecimal tipAmount) {
        this.tipAmount = tipAmount;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Boolean getIsAnonymous() {
        return isAnonymous;
    }

    public void setIsAnonymous(Boolean isAnonymous) {
        this.isAnonymous = isAnonymous;
    }

    public Boolean getWhatsappUpdates() {
        return whatsappUpdates;
    }

    public void setWhatsappUpdates(Boolean whatsappUpdates) {
        this.whatsappUpdates = whatsappUpdates;
    }

    public Boolean getIsIndianCitizen() {
        return isIndianCitizen;
    }

    public void setIsIndianCitizen(Boolean isIndianCitizen) {
        this.isIndianCitizen = isIndianCitizen;
    }

    public String getGiftCardCode() {
        return giftCardCode;
    }

    public void setGiftCardCode(String giftCardCode) {
        this.giftCardCode = giftCardCode;
    }

    public Program getProgram() {
        return program;
    }

    public void setProgram(Program program) {
        this.program = program;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getRazorpayOrderId() {
        return razorpayOrderId;
    }

    public void setRazorpayOrderId(String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
    }

    public String getRazorpayPaymentId() {
        return razorpayPaymentId;
    }

    public void setRazorpayPaymentId(String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }

    public String getRazorpaySignature() {
        return razorpaySignature;
    }

    public void setRazorpaySignature(String razorpaySignature) {
        this.razorpaySignature = razorpaySignature;
    }

    public Boolean getTaxCertificateIssued() {
        return taxCertificateIssued;
    }

    public void setTaxCertificateIssued(Boolean taxCertificateIssued) {
        this.taxCertificateIssued = taxCertificateIssued;
    }

    public String getTaxCertificateNumber() {
        return taxCertificateNumber;
    }

    public void setTaxCertificateNumber(String taxCertificateNumber) {
        this.taxCertificateNumber = taxCertificateNumber;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    // Lifecycle callbacks
    @PrePersist
    @PreUpdate
    private void calculateTotalAmount() {
        if (amount != null) {
            if (tipAmount == null) {
                tipAmount = BigDecimal.ZERO;
            }
            totalAmount = amount.add(tipAmount);
        }
    }

    // Enums
    public enum PaymentStatus {
        PENDING,
        PROCESSING,
        SUCCESS,
        FAILED,
        REFUNDED
    }

    public enum PaymentMethod {
        CARD,
        UPI,
        NET_BANKING,
        WALLET,
        BANK_TRANSFER,
        OTHER
    }
}
