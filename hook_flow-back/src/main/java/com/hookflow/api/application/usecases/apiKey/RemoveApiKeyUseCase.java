package com.hookflow.api.application.usecases.apiKey;

import com.hookflow.api.application.exceptions.ApiKeyNotFoundExecption;
import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.domain.entities.ApiKey;

import java.util.UUID;

public class RemoveApiKeyUseCase {
    private final ApiKeyGateway apiKeyGateway;

    public RemoveApiKeyUseCase(ApiKeyGateway apiKeyGateway){
        this.apiKeyGateway = apiKeyGateway;
    }

    public void execute(UUID id){
        ApiKey apiKey = apiKeyGateway.findById(id)
                .orElseThrow(() -> new ApiKeyNotFoundExecption("Não foi encontrado nenhuma chave api com o id=" + id));

        apiKey.remove();
        apiKeyGateway.save(apiKey);
        return;
    }
}
