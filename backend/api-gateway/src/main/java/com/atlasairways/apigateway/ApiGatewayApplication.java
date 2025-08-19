package com.atlasairways.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * API Gateway Application for Atlas Airways
 * Single Entry Point for All Microservices
 * 
 * @author Atlas Airways Development Team
 * @version 1.0.0
 */
@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
        System.out.println("===============================================");
        System.out.println("🚀 Atlas Airways - API Gateway Started!");
        System.out.println("📍 Gateway running on: http://localhost:8080");
        System.out.println("🌐 All requests route through this gateway");
        System.out.println("===============================================");
    }
}