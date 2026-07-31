package com.hookflow.api.infrastructure.config;

import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ClientApplicationConfig {
    @Bean
    ClientApplicationMapper clientApplicationMapper(){
        return new ClientApplicationMapper();
    }
}
