package org.zikshana.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.zikshana.entity.Volunteer;
import org.zikshana.entity.Donation;
import org.zikshana.dto.ContactRequest;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${spring.mail.username}")
    private String fromEmail;
    @Value("${spring.mail.email}")
    private String email;
    
    public void sendVolunteerConfirmationEmail(Volunteer volunteer) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            
            helper.setFrom(fromEmail);
            helper.setTo(volunteer.getEmail());
            helper.setSubject("Thank you for volunteering with Zikshana Global Foundation");
            
            String emailContent = buildVolunteerConfirmationEmail(volunteer);
            helper.setText(emailContent, true);
            
            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send volunteer confirmation email", e);
        }
    }
    
    public void sendVolunteerApprovalEmail(Volunteer volunteer) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(fromEmail);
            helper.setTo(volunteer.getEmail());
            helper.setSubject("Welcome to Zikshana Global Foundation - Application Approved!");

            String emailContent = buildVolunteerApprovalEmail(volunteer);
            helper.setText(emailContent, true);

            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send volunteer approval email", e);
        }
    }
    
    public void sendContactFormEmail(String name, String email, String subject, String message) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(fromEmail);
            mailMessage.setTo(fromEmail);
            mailMessage.setSubject("Contact Form Submission: " + subject);
            mailMessage.setText(
                "New contact form submission:\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Subject: " + subject + "\n\n" +
                "Message:\n" + message
            );

            mailSender.send(mailMessage);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send contact form email", e);
        }
    }

    public void sendContactEmail(ContactRequest request) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(fromEmail);
            mailMessage.setTo(email);
            mailMessage.setSubject("New Contact Form - " + request.getCategory());
            mailMessage.setReplyTo(request.getEmail());

            String emailBody = String.format(
                "New contact form submission:\n\n" +
                "Name: %s\n" +
                "Email: %s\n" +
                "Phone: %s\n" +
                "Category: %s\n\n" +
                "Message:\n%s\n\n" +
                "---\n" +
                "This is an automated message from Zikshana Contact Form",
                request.getFullName(),
                request.getEmail(),
                request.getPhone() != null ? request.getPhone() : "Not provided",
                request.getCategory(),
                request.getMessage()
            );

            mailMessage.setText(emailBody);
            mailSender.send(mailMessage);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send contact email: " + e.getMessage(), e);
        }
    }
    
    private String buildVolunteerConfirmationEmail(Volunteer volunteer) {
        return """
            <html>
            <body>
                <h2>Thank you for your interest in volunteering!</h2>
                <p>Dear %s,</p>
                <p>Thank you for applying to volunteer with Zikshana Global Foundation. We have received your application and it is currently under review.</p>
                <p><strong>Application Details:</strong></p>
                <ul>
                    <li>Name: %s</li>
                    <li>Email: %s</li>
                    <li>Skills: %s</li>
                    <li>Availability: %s</li>
                </ul>
                <p>Our team will review your application and get back to you within 5-7 business days.</p>
                <p>If you have any questions, please feel free to contact us at info@zikshana.org</p>
                <br>
                <p>Best regards,<br>
                The Zikshana Global Foundation Team</p>
            </body>
            </html>
            """.formatted(
                volunteer.getFullName(),
                volunteer.getFullName(),
                volunteer.getEmail(),
                volunteer.getSkills() != null ? volunteer.getSkills() : "Not specified",
                volunteer.getAvailability() != null ? volunteer.getAvailability().toString() : "Not specified"
            );
    }
    
    private String buildVolunteerApprovalEmail(Volunteer volunteer) {
        return """
            <html>
            <body>
                <h2>Congratulations! Your volunteer application has been approved!</h2>
                <p>Dear %s,</p>
                <p>We are excited to inform you that your volunteer application with Zikshana Global Foundation has been approved!</p>
                <p>Welcome to our team of dedicated volunteers who are making a real difference in communities around the world.</p>
                <p><strong>Next Steps:</strong></p>
                <ul>
                    <li>Our volunteer coordinator will contact you within the next few days</li>
                    <li>You will receive information about upcoming volunteer opportunities</li>
                    <li>Orientation and training details will be shared soon</li>
                </ul>
                <p>Thank you for your commitment to making a positive impact. Together, we can transform lives and empower communities.</p>
                <p>If you have any questions, please contact us at volunteers@zikshana.org</p>
                <br>
                <p>Best regards,<br>
                The Zikshana Global Foundation Team</p>
            </body>
            </html>
            """.formatted(volunteer.getFullName());
    }

    public void sendDonationSuccessEmail(Donation donation) {
        try {
            // Send email to donor
            MimeMessage donorMessage = mailSender.createMimeMessage();
            MimeMessageHelper donorHelper = new MimeMessageHelper(donorMessage, true);

            donorHelper.setFrom(fromEmail);
            donorHelper.setTo(donation.getDonorEmail());
            donorHelper.setSubject("Thank you for your donation - Zikshana Global Foundation");

            String donorEmailContent = buildDonorConfirmationEmail(donation);
            donorHelper.setText(donorEmailContent, true);

            mailSender.send(donorMessage);

            // Send notification to admin
            MimeMessage adminMessage = mailSender.createMimeMessage();
            MimeMessageHelper adminHelper = new MimeMessageHelper(adminMessage, true);

            adminHelper.setFrom(fromEmail);
            adminHelper.setTo(email);
            adminHelper.setSubject("New Donation Received - " + donation.getTransactionId());

            String adminEmailContent = buildAdminDonationNotification(donation);
            adminHelper.setText(adminEmailContent, true);

            mailSender.send(adminMessage);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send donation confirmation email", e);
        }
    }


private String buildDonorConfirmationEmail(Donation donation) {
    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a");
    String donationDate = donation.getCreatedAt() != null
            ? donation.getCreatedAt().format(dateFormat)
            : LocalDateTime.now().format(dateFormat);

    return """
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background: linear-gradient(135deg, #2563eb 0%%, #059669 100%%); color: white; padding: 30px; text-align: center; }
                .content { padding: 30px; }
                .donation-details { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
                .donation-details table { width: 100%%; border-collapse: collapse; }
                .donation-details td { padding: 10px; border-bottom: 1px solid #e5e7eb; }
                .donation-details td:first-child { font-weight: bold; width: 40%%; }
                .total { font-size: 1.2em; font-weight: bold; color: #2563eb; }
                .footer { background: #f9fafb; padding: 20px; text-align: center; margin-top: 30px; font-size: 0.9em; color: #6b7280; }
                .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🙏 Thank You for Your Generous Donation!</h1>
            </div>
            <div class="content">
                <p>Dear %s,</p>
                <p>Thank you for your kind donation to Zikshana Global Foundation. Your generosity will help us continue our mission to transform lives and empower communities.</p>

                <div class="donation-details">
                    <h3 style="margin-top: 0;">Donation Details</h3>
                    <table>
                        <tr>
                            <td>Transaction ID:</td>
                            <td>%s</td>
                        </tr>
                        <tr>
                            <td>Payment ID:</td>
                            <td>%s</td>
                        </tr>
                        <tr>
                            <td>Date & Time:</td>
                            <td>%s</td>
                        </tr>
                        <tr>
                            <td>Donation Amount:</td>
                            <td>₹%,.2f</td>
                        </tr>
                        <tr>
                            <td>Platform Tip:</td>
                            <td>₹%,.2f</td>
                        </tr>
                        <tr>
                            <td class="total">Total Amount Paid:</td>
                            <td class="total">₹%,.2f</td>
                        </tr>
                    </table>
                </div>

                <h3>What's Next?</h3>
                <p>
                    <strong>📧 Invoice:</strong>
                    For your donation invoice and 80G tax exemption certificate,
                    please contact us at
                    <a href="mailto:%s">%s</a> with your transaction ID.
                </p>

                <p><strong>💚 Impact:</strong> Your contribution will directly support our programs in education, healthcare, and community development.</p>

                <p>If you have any questions or need assistance, please don't hesitate to reach out to us.</p>

                <p style="margin-top: 30px;">
                    With heartfelt gratitude,<br>
                    <strong>The Zikshana Global Foundation Team</strong>
                </p>
            </div>

            <div class="footer">
                <p>Zikshana Global Foundation | Transforming Lives, Empowering Communities</p>
                <p>Email: %s | Website: www.zikshana.org</p>
                <p style="font-size: 0.8em; margin-top: 10px;">
                    This is an automated confirmation email. Please do not reply to this email.
                </p>
            </div>
        </body>
        </html>
        """.formatted(
            donation.getIsAnonymous() ? "Valued Donor" : donation.getDonorName(),
            donation.getTransactionId(),
            donation.getRazorpayPaymentId() != null ? donation.getRazorpayPaymentId() : "N/A",
            donationDate,
            donation.getAmount(),
            donation.getTipAmount(),
            donation.getTotalAmount(),
            email,   // mailto
            email,   // visible email
            email    // footer email
        );
}

    private String buildAdminDonationNotification(Donation donation) {
        DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a");
        String donationDate = donation.getCreatedAt() != null ? donation.getCreatedAt().format(dateFormat) : LocalDateTime.now().format(dateFormat);

        return """
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .header { background: #2563eb; color: white; padding: 20px; }
                    .content { padding: 20px; }
                    .details { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
                    .details table { width: 100%%; border-collapse: collapse; }
                    .details td { padding: 8px; border-bottom: 1px solid #e5e7eb; }
                    .details td:first-child { font-weight: bold; width: 35%%; }
                    .highlight { background: #dcfce7; padding: 15px; border-left: 4px solid #059669; margin: 20px 0; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>🎉 New Donation Received!</h2>
                </div>
                <div class="content">
                    <div class="highlight">
                        <h3 style="margin: 0; color: #059669;">Total Amount: ₹%,.2f</h3>
                    </div>

                    <div class="details">
                        <h3 style="margin-top: 0;">Donor Information</h3>
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Mobile:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Pincode:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>PAN:</td>
                                <td>%s</td>
                            </tr>
                        </table>
                    </div>

                    <div class="details">
                        <h3 style="margin-top: 0;">Payment Details</h3>
                        <table>
                            <tr>
                                <td>Transaction ID:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Razorpay Payment ID:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Date & Time:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Donation Amount:</td>
                                <td>₹%,.2f</td>
                            </tr>
                            <tr>
                                <td>Platform Tip:</td>
                                <td>₹%,.2f</td>
                            </tr>
                            <tr style="font-weight: bold; font-size: 1.1em; color: #2563eb;">
                                <td>Total Amount:</td>
                                <td>₹%,.2f</td>
                            </tr>
                            <tr>
                                <td>Payment Status:</td>
                                <td><span style="color: #059669; font-weight: bold;">✓ SUCCESS</span></td>
                            </tr>
                        </table>
                    </div>

                    <div class="details">
                        <h3 style="margin-top: 0;">Additional Information</h3>
                        <table>
                            <tr>
                                <td>Anonymous Donation:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>WhatsApp Updates:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Indian Citizen:</td>
                                <td>%s</td>
                            </tr>
                            <tr>
                                <td>Gift Card Code:</td>
                                <td>%s</td>
                            </tr>
                        </table>
                    </div>

                    <p style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0;">
                        <strong>⚠️ Action Required:</strong> Please process the 80G tax certificate and send the invoice to the donor.
                    </p>
                </div>
            </body>
            </html>
            """.formatted(
                donation.getTotalAmount(),
                donation.getIsAnonymous() ? "Anonymous Donor" : donation.getDonorName(),
                donation.getDonorEmail(),
                donation.getDonorMobile(),
                donation.getDonorAddress(),
                donation.getDonorPincode(),
                donation.getDonorPan() != null && !donation.getDonorPan().isEmpty() ? donation.getDonorPan() : "Not Provided",
                donation.getTransactionId(),
                donation.getRazorpayPaymentId() != null ? donation.getRazorpayPaymentId() : "N/A",
                donationDate,
                donation.getAmount(),
                donation.getTipAmount(),
                donation.getTotalAmount(),
                donation.getIsAnonymous() ? "Yes" : "No",
                donation.getWhatsappUpdates() ? "Yes" : "No",
                donation.getIsIndianCitizen() ? "Yes" : "No",
                donation.getGiftCardCode() != null && !donation.getGiftCardCode().isEmpty() ? donation.getGiftCardCode() : "None"
            );
    }
}