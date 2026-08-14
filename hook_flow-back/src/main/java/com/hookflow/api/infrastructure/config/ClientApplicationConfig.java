package com.hookflow.api.infrastructure.config;

import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.application.usecases.clientApplication.CreateClientApplicationUseCase;
import com.hookflow.api.application.usecases.clientApplication.GetAllClientApplicationUseCase;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ClientApplicationConfig {
    @Bean
    GetAllClientApplicationUseCase getAllClientApplicationUseCase(ClientApplicationGateway clientApplicationGateway, ApiKeyGateway apiKeyGateway){
        return new GetAllClientApplicationUseCase(clientApplicationGateway, apiKeyGateway);
    }

    @Bean
    CreateClientApplicationUseCase createClientApplicationUseCase(ClientApplicationGateway clientApplicationGateway){
        return new CreateClientApplicationUseCase(clientApplicationGateway);
    }

    @Bean
    ClientApplicationMapper clientApplicationMapper(){
        return new ClientApplicationMapper();
    }
}
