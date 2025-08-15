package org.zikshana.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.zikshana.entity.Volunteer;

import java.util.List;
import java.util.Optional;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {
    
    Optional<Volunteer> findByEmail(String email);
    
    Boolean existsByEmail(String email);
    
    List<Volunteer> findByStatusOrderByCreatedAtDesc(Volunteer.VolunteerStatus status);
    
    Page<Volunteer> findByStatus(Volunteer.VolunteerStatus status, Pageable pageable);
    
    @Query("SELECT v FROM Volunteer v WHERE " +
           "(:status IS NULL OR v.status = :status) AND " +
           "(LOWER(v.fullName) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(v.email) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(v.skills) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<Volunteer> findVolunteersWithFilters(
        @Param("status") Volunteer.VolunteerStatus status,
        @Param("search") String search,
        Pageable pageable
    );
    
    Long countByStatus(Volunteer.VolunteerStatus status);
    
    @Query("SELECT COUNT(v) FROM Volunteer v WHERE " +
           "v.status = :status AND " +
           ":interest MEMBER OF v.interests")
    Long countByStatusAndInterest(
        @Param("status") Volunteer.VolunteerStatus status,
        @Param("interest") Volunteer.VolunteerInterest interest
    );
}