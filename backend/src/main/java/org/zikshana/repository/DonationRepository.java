package org.zikshana.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.zikshana.entity.Donation;
import org.zikshana.entity.Program;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    
    Optional<Donation> findByRazorpayOrderId(String razorpayOrderId);
    
    List<Donation> findByStatusOrderByCreatedAtDesc(Donation.DonationStatus status);
    
    Page<Donation> findByStatus(Donation.DonationStatus status, Pageable pageable);
    
    List<Donation> findByProgramAndStatusOrderByCreatedAtDesc(
        Program program, 
        Donation.DonationStatus status
    );
    
    @Query("SELECT SUM(d.amount) FROM Donation d WHERE d.status = :status")
    BigDecimal getTotalAmountByStatus(@Param("status") Donation.DonationStatus status);
    
    @Query("SELECT SUM(d.amount) FROM Donation d WHERE " +
           "d.program = :program AND d.status = :status")
    BigDecimal getTotalAmountByProgramAndStatus(
        @Param("program") Program program,
        @Param("status") Donation.DonationStatus status
    );
    
    @Query("SELECT SUM(d.amount) FROM Donation d WHERE " +
           "d.status = :status AND " +
           "d.createdAt >= :startDate AND d.createdAt <= :endDate")
    BigDecimal getTotalAmountByStatusAndDateRange(
        @Param("status") Donation.DonationStatus status,
        @Param("startDate") LocalDateTime startDate,
        @Param("endDate") LocalDateTime endDate
    );
    
    Long countByStatus(Donation.DonationStatus status);
    
    Long countByStatusAndCreatedAtBetween(
        Donation.DonationStatus status,
        LocalDateTime startDate,
        LocalDateTime endDate
    );
    
    @Query("SELECT d FROM Donation d WHERE " +
           "(:status IS NULL OR d.status = :status) AND " +
           "(:programId IS NULL OR d.program.id = :programId) AND " +
           "(LOWER(d.donorName) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(d.donorEmail) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<Donation> findDonationsWithFilters(
        @Param("status") Donation.DonationStatus status,
        @Param("programId") Long programId,
        @Param("search") String search,
        Pageable pageable
    );
}