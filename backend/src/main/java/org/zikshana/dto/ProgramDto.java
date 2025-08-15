package org.zikshana.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.zikshana.entity.Program;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class ProgramDto {
    
    private Long id;
    
    @NotBlank(message = "Title is required")
    private String title;
    
    @NotBlank(message = "Description is required")
    private String description;
    
    private String fullDescription;
    private String imageUrl;
    
    @NotNull(message = "Category is required")
    private Program.ProgramCategory category;
    
    private Program.ProgramStatus status;
    
    @Positive(message = "Beneficiaries count must be positive")
    private Integer beneficiariesCount;
    
    @Positive(message = "Locations count must be positive")
    private Integer locationsCount;
    
    private BigDecimal budget;
    private BigDecimal targetAmount;
    private BigDecimal raisedAmount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    // Constructors
    public ProgramDto() {}
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
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
    
    public Program.ProgramCategory getCategory() {
        return category;
    }
    
    public void setCategory(Program.ProgramCategory category) {
        this.category = category;
    }
    
    public Program.ProgramStatus getStatus() {
        return status;
    }
    
    public void setStatus(Program.ProgramStatus status) {
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