package org.zikshana.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.zikshana.dto.DonationDto;
import org.zikshana.service.DonationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private DonationService donationService;

    @GetMapping("/donations")
    public ResponseEntity<Map<String, Object>> getAllDonationsForAdmin(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDirection) {

        Sort.Direction direction = sortDirection.equalsIgnoreCase("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));

        List<DonationDto> donations = donationService.getAllDonations();

        // Manual pagination
        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), donations.size());

        List<DonationDto> pageContent = donations.subList(start, end);

        Map<String, Object> response = new HashMap<>();
        response.put("donations", pageContent);
        response.put("currentPage", page);
        response.put("totalItems", donations.size());
        response.put("totalPages", (int) Math.ceil((double) donations.size() / size));

        return ResponseEntity.ok(response);
    }

    @GetMapping("/donations/{id}")
    public ResponseEntity<DonationDto> getDonationById(@PathVariable Long id) {
        DonationDto donation = donationService.getDonationById(id);
        return ResponseEntity.ok(donation);
    }

    @GetMapping("/donations/search")
    public ResponseEntity<List<DonationDto>> searchDonations(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String transactionId) {

        if (email != null && !email.isEmpty()) {
            List<DonationDto> donations = donationService.getDonationsByEmail(email);
            return ResponseEntity.ok(donations);
        } else if (transactionId != null && !transactionId.isEmpty()) {
            DonationDto donation = donationService.getDonationByTransactionId(transactionId);
            return ResponseEntity.ok(List.of(donation));
        }

        return ResponseEntity.ok(donationService.getAllDonations());
    }

    @GetMapping("/dashboard/stats")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();

        stats.put("totalAmount", donationService.getTotalDonationsAmount());
        stats.put("totalDonations", donationService.getTotalDonationsCount());
        stats.put("recentDonations", donationService.getRecentDonations());

        // Get all donations for additional stats
        List<DonationDto> allDonations = donationService.getAllDonations();

        // Count by status
        Map<String, Long> statusCounts = new HashMap<>();
        statusCounts.put("SUCCESS", allDonations.stream().filter(d -> "SUCCESS".equals(d.getPaymentStatus())).count());
        statusCounts.put("PENDING", allDonations.stream().filter(d -> "PENDING".equals(d.getPaymentStatus())).count());
        statusCounts.put("FAILED", allDonations.stream().filter(d -> "FAILED".equals(d.getPaymentStatus())).count());
        statusCounts.put("PROCESSING", allDonations.stream().filter(d -> "PROCESSING".equals(d.getPaymentStatus())).count());

        stats.put("statusCounts", statusCounts);

        return ResponseEntity.ok(stats);
    }

    @PutMapping("/donations/{transactionId}/status")
    public ResponseEntity<DonationDto> updateDonationStatus(
            @PathVariable String transactionId,
            @RequestParam String status,
            @RequestParam(required = false) String razorpayPaymentId) {

        DonationDto updated = donationService.updatePaymentStatus(
            transactionId,
            status,
            razorpayPaymentId != null ? razorpayPaymentId : "",
            ""
        );

        return ResponseEntity.ok(updated);
    }

    @GetMapping("/donations/export")
    public ResponseEntity<List<DonationDto>> exportDonations(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            @RequestParam(required = false) String status) {

        List<DonationDto> donations = donationService.getAllDonations();

        // Filter by status if provided
        if (status != null && !status.isEmpty()) {
            donations = donations.stream()
                .filter(d -> status.equalsIgnoreCase(d.getPaymentStatus()))
                .toList();
        }

        return ResponseEntity.ok(donations);
    }
}
