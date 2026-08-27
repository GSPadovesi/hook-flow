package com.hookflow.api.application.usecases.webHook;

import com.hookflow.api.application.command.webHook.CreateWebHookCommand;
import com.hookflow.api.application.gateways.WebHookGateway;
import com.hookflow.api.domain.entities.WebHook;
import com.hookflow.api.infrastructure.config.WebHookConfig;

public class CreateWebHookUseCase {
    private final WebHookGateway webHookGateway;

    public CreateWebHookUseCase(WebHookGateway webHookGateway){
        this.webHookGateway = webHookGateway;
    }

    public WebHook execute(CreateWebHookCommand command){
        return webHookGateway.save(WebHook.create(command.clientApplicationId(), command.url()));
    }
}
