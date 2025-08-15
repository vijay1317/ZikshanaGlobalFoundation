package org.zikshana.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.zikshana.dto.VolunteerDto;
import org.zikshana.entity.Volunteer;
import org.zikshana.service.VolunteerService;

import java.util.List;

@RestController
@RequestMapping("/volunteers")
@Tag(name = "Volunteers", description = "Volunteer management APIs")
@CrossOrigin(origins = "*", maxAge = 3600)
public class VolunteerController {
    
    @Autowired
    private VolunteerService volunteerService;
    
    @PostMapping("/register")
    @Operation(summary = "Register new volunteer")
    public ResponseEntity<VolunteerDto> registerVolunteer(@Valid @RequestBody VolunteerDto volunteerDto) {
        VolunteerDto registeredVolunteer = volunteerService.registerVolunteer(volunteerDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredVolunteer);
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOLUNTEER')")
    @Operation(summary = "Get all volunteers with filters")
    public ResponseEntity<Page<VolunteerDto>> getVolunteers(
            @RequestParam(required = false) Volunteer.VolunteerStatus status,
            @RequestParam(required = false, defaultValue = "") String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        
        Page<VolunteerDto> volunteers = volunteerService.getVolunteers(status, search, page, size, sortBy, sortDir);
        return ResponseEntity.ok(volunteers);
    }
    
    @GetMapping("/active")
    @Operation(summary = "Get active volunteers")
    public ResponseEntity<List<VolunteerDto>> getActiveVolunteers() {
        List<VolunteerDto> volunteers = volunteerService.getActiveVolunteers();
        return ResponseEntity.ok(volunteers);
    }
    
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOLUNTEER')")
    @Operation(summary = "Get volunteer by ID")
    public ResponseEntity<VolunteerDto> getVolunteerById(@PathVariable Long id) {
        VolunteerDto volunteer = volunteerService.getVolunteerById(id);
        return ResponseEntity.ok(volunteer);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Update volunteer")
    public ResponseEntity<VolunteerDto> updateVolunteer(@PathVariable Long id, @Valid @RequestBody VolunteerDto volunteerDto) {
        VolunteerDto updatedVolunteer = volunteerService.updateVolunteer(id, volunteerDto);
        return ResponseEntity.ok(updatedVolunteer);
    }
    
    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Update volunteer status")
    public ResponseEntity<VolunteerDto> updateVolunteerStatus(
            @PathVariable Long id, 
            @RequestParam Volunteer.VolunteerStatus status) {
        VolunteerDto updatedVolunteer = volunteerService.updateVolunteerStatus(id, status);
        return ResponseEntity.ok(updatedVolunteer);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Delete volunteer")
    public ResponseEntity<?> deleteVolunteer(@PathVariable Long id) {
        volunteerService.deleteVolunteer(id);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/stats/total")
    @Operation(summary = "Get total volunteers by status")
    public ResponseEntity<Long> getTotalVolunteersByStatus(@RequestParam Volunteer.VolunteerStatus status) {
        Long count = volunteerService.getTotalVolunteersByStatus(status);
        return ResponseEntity.ok(count);
    }
    
    @GetMapping("/stats/interest")
    @Operation(summary = "Get volunteers by interest")
    public ResponseEntity<Long> getVolunteersByInterest(@RequestParam Volunteer.VolunteerInterest interest) {
        Long count = volunteerService.getVolunteersByInterest(interest);
        return ResponseEntity.ok(count);
    }
}