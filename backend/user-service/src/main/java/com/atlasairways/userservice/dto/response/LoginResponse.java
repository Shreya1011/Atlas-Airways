package com.atlasairways.userservice.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Login Response DTO
 * Response object for successful login
 * 
 * @author Atlas Airways Development Team
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    private String accessToken;
    private String refreshToken;
    private String tokenType = "Bearer";
    private Long expiresIn;
    private UserInfo userInfo;
    private LocalDateTime loginTime;
    private String message;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserInfo {
        private Long userId;
        private String title;
        private String firstName;
        private String lastName;
        private String email;
        private String phoneNumber;
        private Boolean emailVerified;
        private LocalDateTime lastLogin;

        public String getFullName() {
            return title + " " + firstName + " " + lastName;
        }
    }

    // Constructor for successful login
    public LoginResponse(String accessToken, String refreshToken, Long expiresIn, UserInfo userInfo) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.userInfo = userInfo;
        this.loginTime = LocalDateTime.now();
        this.message = "Login successful";
    }
}