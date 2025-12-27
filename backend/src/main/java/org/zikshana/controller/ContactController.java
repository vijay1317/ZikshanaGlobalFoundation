package org.zikshana.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zikshana.dto.ContactRequest;
import org.zikshana.service.EmailService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Map<String, String>> submitContactForm(@Valid @RequestBody ContactRequest request) {
        try {
            emailService.sendContactEmail(request);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Thank you for reaching out! We will get back to you soon.");
            response.put("status", "success");

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Failed to send message. Please try again or contact us directly at info@zikshana.com");
            response.put("status", "error");
            response.put("error", e.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
