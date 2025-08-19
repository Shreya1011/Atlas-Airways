package com.atlasairways.userservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * User Service Application for Atlas Airways
 * Handles User Registration, Authentication, and Profile Management
 * 
 * @author Atlas Airways Development Team
 * @version 1.0.0
 */
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
        System.out.println("===============================================");
        System.out.println("👤 Atlas Airways - User Service Started!");
        System.out.println("📍 Service running on: http://localhost:8081");
        System.out.println("🔐 Handles: Registration, Login, User Management");
        System.out.println("===============================================");
    }
}