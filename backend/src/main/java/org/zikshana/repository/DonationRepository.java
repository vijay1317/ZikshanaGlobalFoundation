package org.zikshana.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.zikshana.entity.Donation;
import org.zikshana.entity.Donation.PaymentStatus;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {

    Optional<Donation> findByTransactionId(String transactionId);

    Optional<Donation> findByRazorpayOrderId(String razorpayOrderId);

    List<Donation> findByDonorEmail(String donorEmail);

    List<Donation> findByPaymentStatus(PaymentStatus paymentStatus);

    List<Donation> findByProgram_Id(Long programId);

    @Query("SELECT SUM(d.totalAmount) FROM Donation d WHERE d.paymentStatus = 'SUCCESS'")
    BigDecimal getTotalDonationsAmount();

    @Query("SELECT COUNT(d) FROM Donation d WHERE d.paymentStatus = 'SUCCESS'")
    Long getTotalDonationsCount();

    @Query("SELECT d FROM Donation d WHERE d.paymentStatus = 'SUCCESS' ORDER BY d.createdAt DESC")
    List<Donation> findRecentSuccessfulDonations();

    @Query("SELECT d FROM Donation d WHERE d.createdAt >= :startDate AND d.createdAt <= :endDate AND d.paymentStatus = 'SUCCESS'")
    List<Donation> findDonationsBetweenDates(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
}
