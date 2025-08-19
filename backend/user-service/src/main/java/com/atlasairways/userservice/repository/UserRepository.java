package com.atlasairways.userservice.repository;

import com.atlasairways.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * User Repository Interface
 * Data Access Layer for User Entity
 * 
 * @author Atlas Airways Development Team
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Find user by email address
     */
    Optional<User> findByEmail(String email);

    /**
     * Find user by phone number
     */
    Optional<User> findByPhoneNumber(String phoneNumber);

    /**
     * Check if email already exists
     */
    boolean existsByEmail(String email);

    /**
     * Check if phone number already exists
     */
    boolean existsByPhoneNumber(String phoneNumber);

    /**
     * Find all active users
     */
    List<User> findByIsActiveTrue();

    /**
     * Find users created between dates
     */
    @Query("SELECT u FROM User u WHERE u.createdAt BETWEEN :startDate AND :endDate")
    List<User> findUsersCreatedBetween(@Param("startDate") LocalDateTime startDate, 
                                       @Param("endDate") LocalDateTime endDate);

    /**
     * Update last login time
     */
    @Modifying
    @Query("UPDATE User u SET u.lastLogin = :loginTime WHERE u.userId = :userId")
    void updateLastLogin(@Param("userId") Long userId, @Param("loginTime") LocalDateTime loginTime);

    /**
     * Lock user account
     */
    @Modifying
    @Query("UPDATE User u SET u.accountLocked = true WHERE u.userId = :userId")
    void lockUserAccount(@Param("userId") Long userId);

    /**
     * Unlock user account and reset failed attempts
     */
    @Modifying
    @Query("UPDATE User u SET u.accountLocked = false, u.failedLoginAttempts = 0 WHERE u.userId = :userId")
    void unlockUserAccount(@Param("userId") Long userId);

    /**
     * Increment failed login attempts
     */
    @Modifying
    @Query("UPDATE User u SET u.failedLoginAttempts = u.failedLoginAttempts + 1 WHERE u.userId = :userId")
    void incrementFailedLoginAttempts(@Param("userId") Long userId);

    /**
     * Reset failed login attempts
     */
    @Modifying
    @Query("UPDATE User u SET u.failedLoginAttempts = 0 WHERE u.userId = :userId")
    void resetFailedLoginAttempts(@Param("userId") Long userId);

    /**
     * Verify user email
     */
    @Modifying
    @Query("UPDATE User u SET u.emailVerified = true WHERE u.userId = :userId")
    void verifyUserEmail(@Param("userId") Long userId);

    /**
     * Deactivate user account
     */
    @Modifying
    @Query("UPDATE User u SET u.isActive = false WHERE u.userId = :userId")
    void deactivateUser(@Param("userId") Long userId);

    /**
     * Find users by name (first name or last name)
     */
    @Query("SELECT u FROM User u WHERE LOWER(u.firstName) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
           "LOWER(u.lastName) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<User> findByNameContaining(@Param("name") String name);

    /**
     * Count total active users
     */
    @Query("SELECT COUNT(u) FROM User u WHERE u.isActive = true")
    Long countActiveUsers();

    /**
     * Find locked accounts
     */
    List<User> findByAccountLockedTrue();

    /**
     * Find unverified email accounts
     */
    List<User> findByEmailVerifiedFalse();
}