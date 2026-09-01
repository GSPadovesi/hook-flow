package com.hookflow.api.infrastructure.config;

import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.application.gateways.WebHookGateway;
import com.hookflow.api.application.usecases.webHook.CreateWebHookUseCase;
import com.hookflow.api.application.usecases.webHook.GetAllWebHookUseCase;
import com.hookflow.api.infrastructure.persistence.webHook.WebHookMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebHookConfig {
    @Bean
    public GetAllWebHookUseCase getAllWebHookUseCasen(ClientApplicationGateway clientApplicationGateway, WebHookGateway webHookGateway){
        return new GetAllWebHookUseCase(clientApplicationGateway, webHookGateway);
    }
    @Bean
    public CreateWebHookUseCase createWebHookUseCase(WebHookGateway webHookGateway){
        return new CreateWebHookUseCase(webHookGateway);
    }

    @Bean
    public WebHookMapper webHookMapper() {
        return new WebHookMapper();
    }
}
