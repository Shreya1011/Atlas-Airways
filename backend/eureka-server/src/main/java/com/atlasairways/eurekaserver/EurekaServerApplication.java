package com.atlasairways.eurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * Eureka Server Application for Atlas Airways
 * Service Discovery Server for Microservices Architecture
 * 
 * @author Atlas Airways Development Team
 * @version 1.0.0
 */
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
        System.out.println("===============================================");
        System.out.println("🚀 Atlas Airways - Eureka Server Started!");
        System.out.println("📍 Service Registry: http://localhost:8761");
        System.out.println("🌐 Eureka Dashboard: http://localhost:8761");
        System.out.println("===============================================");
    }
}