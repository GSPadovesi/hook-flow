package com.hookflow.api.infrastructure.config;

import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.application.usecases.apiKey.CreateApiKeyUseCase;
import com.hookflow.api.infrastructure.persistence.apiKey.ApiKeyMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiKeyConfig {
    @Bean
    CreateApiKeyUseCase createApiKeyUseCase(ApiKeyGateway apiKeyGateway, ClientApplicationGateway clientApplicationGateway){
        return new CreateApiKeyUseCase(apiKeyGateway, clientApplicationGateway);
    }

    @Bean
    ApiKeyMapper apiKeyMapper(){
        return new ApiKeyMapper();
    }
}
