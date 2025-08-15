package org.zikshana.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.zikshana.entity.Program;

import java.util.List;

@Repository
public interface ProgramRepository extends JpaRepository<Program, Long> {
    
    List<Program> findByStatusOrderByCreatedAtDesc(Program.ProgramStatus status);
    
    List<Program> findByCategoryAndStatusOrderByCreatedAtDesc(
        Program.ProgramCategory category, 
        Program.ProgramStatus status
    );
    
    Page<Program> findByStatus(Program.ProgramStatus status, Pageable pageable);
    
    @Query("SELECT p FROM Program p WHERE " +
           "(:category IS NULL OR p.category = :category) AND " +
           "(:status IS NULL OR p.status = :status) AND " +
           "(LOWER(p.title) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(p.description) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<Program> findProgramsWithFilters(
        @Param("category") Program.ProgramCategory category,
        @Param("status") Program.ProgramStatus status,
        @Param("search") String search,
        Pageable pageable
    );
    
    @Query("SELECT SUM(p.beneficiariesCount) FROM Program p WHERE p.status = :status")
    Long getTotalBeneficiariesByStatus(@Param("status") Program.ProgramStatus status);
    
    @Query("SELECT COUNT(DISTINCT p.locationsCount) FROM Program p WHERE p.status = :status")
    Long getTotalLocationsByStatus(@Param("status") Program.ProgramStatus status);
}