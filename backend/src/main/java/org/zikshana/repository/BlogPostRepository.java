package org.zikshana.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.zikshana.entity.BlogPost;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    
    Page<BlogPost> findByIsPublishedTrueOrderByCreatedAtDesc(Pageable pageable);
    
    Page<BlogPost> findByCategoryAndIsPublishedTrueOrderByCreatedAtDesc(
        BlogPost.BlogCategory category, 
        Pageable pageable
    );
    
    List<BlogPost> findByIsFeaturedTrueAndIsPublishedTrueOrderByCreatedAtDesc();
    
    @Query("SELECT b FROM BlogPost b WHERE b.isPublished = true AND " +
           "(:category IS NULL OR b.category = :category) AND " +
           "(LOWER(b.title) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(b.excerpt) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<BlogPost> findPublishedBlogPostsWithFilters(
        @Param("category") BlogPost.BlogCategory category,
        @Param("search") String search,
        Pageable pageable
    );
    
    List<BlogPost> findTop5ByIsPublishedTrueOrderByViewCountDesc();
    
    List<BlogPost> findTop5ByIsPublishedTrueOrderByCreatedAtDesc();
    
    @Modifying
    @Query("UPDATE BlogPost b SET b.viewCount = b.viewCount + 1 WHERE b.id = :id")
    void incrementViewCount(@Param("id") Long id);
    
    Optional<BlogPost> findByIdAndIsPublishedTrue(Long id);
}