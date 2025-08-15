package org.zikshana.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.zikshana.entity.Volunteer;

import java.time.LocalDateTime;
import java.util.List;

public class VolunteerDto {
    
    private Long id;
    
    @NotBlank(message = "Full name is required")
    private String fullName;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;
    
    private String phone;
    private String skills;
    
    @NotNull(message = "Availability is required")
    private Volunteer.Availability availability;
    
    private List<Volunteer.VolunteerInterest> interests;
    private Volunteer.VolunteerStatus status;
    private String notes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    // Constructors
    public VolunteerDto() {}
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFullName() {
        return fullName;
    }
    
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPhone() {
        return phone;
    }
    
    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    public String getSkills() {
        return skills;
    }
    
    public void setSkills(String skills) {
        this.skills = skills;
    }
    
    public Volunteer.Availability getAvailability() {
        return availability;
    }
    
    public void setAvailability(Volunteer.Availability availability) {
        this.availability = availability;
    }
    
    public List<Volunteer.VolunteerInterest> getInterests() {
        return interests;
    }
    
    public void setInterests(List<Volunteer.VolunteerInterest> interests) {
        this.interests = interests;
    }
    
    public Volunteer.VolunteerStatus getStatus() {
        return status;
    }
    
    public void setStatus(Volunteer.VolunteerStatus status) {
        this.status = status;
    }
    
    public String getNotes() {
        return notes;
    }
    
    public void setNotes(String notes) {
        this.notes = notes;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}