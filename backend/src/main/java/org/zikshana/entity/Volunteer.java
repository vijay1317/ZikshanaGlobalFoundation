package org.zikshana.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name = "volunteers")
public class Volunteer extends BaseEntity {
    
    @NotBlank
    @Size(max = 100)
    @Column(name = "full_name")
    private String fullName;
    
    @NotBlank
    @Size(max = 150)
    @Email
    private String email;
    
    @Size(max = 15)
    private String phone;
    
    @Column(columnDefinition = "TEXT")
    private String skills;
    
    @Enumerated(EnumType.STRING)
    private Availability availability;
    
    @ElementCollection(fetch = FetchType.LAZY)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "volunteer_interests", 
                    joinColumns = @JoinColumn(name = "volunteer_id"))
    @Column(name = "interest")
    private List<VolunteerInterest> interests;
    
    @Enumerated(EnumType.STRING)
    private VolunteerStatus status = VolunteerStatus.PENDING;
    
    @Column(columnDefinition = "TEXT")
    private String notes;
    
    // Getters and Setters
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
    
    public Availability getAvailability() {
        return availability;
    }
    
    public void setAvailability(Availability availability) {
        this.availability = availability;
    }
    
    public List<VolunteerInterest> getInterests() {
        return interests;
    }
    
    public void setInterests(List<VolunteerInterest> interests) {
        this.interests = interests;
    }
    
    public VolunteerStatus getStatus() {
        return status;
    }
    
    public void setStatus(VolunteerStatus status) {
        this.status = status;
    }
    
    public String getNotes() {
        return notes;
    }
    
    public void setNotes(String notes) {
        this.notes = notes;
    }
    
    public enum Availability {
        WEEKDAYS,
        WEEKENDS,
        FLEXIBLE,
        EVENINGS
    }
    
    public enum VolunteerInterest {
        EDUCATION,
        HEALTHCARE,
        COMMUNITY_DEVELOPMENT,
        WOMEN_EMPOWERMENT
    }
    
    public enum VolunteerStatus {
        PENDING,
        APPROVED,
        ACTIVE,
        INACTIVE,
        REJECTED
    }
}