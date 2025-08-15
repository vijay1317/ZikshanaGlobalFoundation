package org.zikshana.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

@Entity
@Table(name = "programs")
public class Program extends BaseEntity {
    
    @NotBlank
    @Size(max = 200)
    private String title;
    
    @NotBlank
    @Size(max = 500)
    private String description;
    
    @Column(name = "full_description", columnDefinition = "TEXT")
    private String fullDescription;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @Enumerated(EnumType.STRING)
    private ProgramCategory category;
    
    @Enumerated(EnumType.STRING)
    private ProgramStatus status = ProgramStatus.ACTIVE;
    
    @Column(name = "beneficiaries_count")
    private Integer beneficiariesCount = 0;
    
    @Column(name = "locations_count")
    private Integer locationsCount = 0;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal budget;
    
    @Column(name = "target_amount", precision = 10, scale = 2)
    private BigDecimal targetAmount;
    
    @Column(name = "raised_amount", precision = 10, scale = 2)
    private BigDecimal raisedAmount = BigDecimal.ZERO;
    
    // Getters and Setters
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public String getFullDescription() {
        return fullDescription;
    }
    
    public void setFullDescription(String fullDescription) {
        this.fullDescription = fullDescription;
    }
    
    public String getImageUrl() {
        return imageUrl;
    }
    
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    
    public ProgramCategory getCategory() {
        return category;
    }
    
    public void setCategory(ProgramCategory category) {
        this.category = category;
    }
    
    public ProgramStatus getStatus() {
        return status;
    }
    
    public void setStatus(ProgramStatus status) {
        this.status = status;
    }
    
    public Integer getBeneficiariesCount() {
        return beneficiariesCount;
    }
    
    public void setBeneficiariesCount(Integer beneficiariesCount) {
        this.beneficiariesCount = beneficiariesCount;
    }
    
    public Integer getLocationsCount() {
        return locationsCount;
    }
    
    public void setLocationsCount(Integer locationsCount) {
        this.locationsCount = locationsCount;
    }
    
    public BigDecimal getBudget() {
        return budget;
    }
    
    public void setBudget(BigDecimal budget) {
        this.budget = budget;
    }
    
    public BigDecimal getTargetAmount() {
        return targetAmount;
    }
    
    public void setTargetAmount(BigDecimal targetAmount) {
        this.targetAmount = targetAmount;
    }
    
    public BigDecimal getRaisedAmount() {
        return raisedAmount;
    }
    
    public void setRaisedAmount(BigDecimal raisedAmount) {
        this.raisedAmount = raisedAmount;
    }
    
    public enum ProgramCategory {
        EDUCATION,
        HEALTHCARE,
        COMMUNITY_DEVELOPMENT,
        WOMEN_EMPOWERMENT
    }
    
    public enum ProgramStatus {
        ACTIVE,
        INACTIVE,
        COMPLETED,
        PAUSED
    }
}