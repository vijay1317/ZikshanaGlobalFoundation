package org.zikshana.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.zikshana.entity.Volunteer;
import org.zikshana.entity.Donation;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${spring.mail.username}")
    private String fromEmail;
    
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
    
    public void sendDonationConfirmationEmail(Donation donation) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            
            helper.setFrom(fromEmail);
            helper.setTo(donation.getDonorEmail());
            helper.setSubject("Thank you for your generous donation - Zikshana Global Foundation");
            
            String emailContent = buildDonationConfirmationEmail(donation);
            helper.setText(emailContent, true);
            
            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send donation confirmation email", e);
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
    
    private String buildDonationConfirmationEmail(Donation donation) {
        return """
            <html>
            <body>
                <h2>Thank you for your generous donation!</h2>
                <p>Dear %s,</p>
                <p>Thank you for your generous donation to Zikshana Global Foundation. Your support means the world to us and the communities we serve.</p>
                <p><strong>Donation Details:</strong></p>
                <ul>
                    <li>Amount: ₹%s</li>
                    <li>Transaction ID: %s</li>
                    <li>Date: %s</li>
                    <li>Program: %s</li>
                </ul>
                <p>Your donation will help us continue our mission to empower communities through education, healthcare, and sustainable development.</p>
                <p>You will receive a tax receipt shortly. Please keep this for your records.</p>
                <p>If you have any questions about your donation, please contact us at donations@zikshana.org</p>
                <br>
                <p>With gratitude,<br>
                The Zikshana Global Foundation Team</p>
            </body>
            </html>
            """.formatted(
                donation.getDonorName(),
                donation.getAmount().toString(),
                donation.getTransactionId() != null ? donation.getTransactionId() : "Pending",
                donation.getCreatedAt().toString(),
                donation.getProgram() != null ? donation.getProgram().getTitle() : "General Fund"
            );
    }
}