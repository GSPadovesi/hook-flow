package com.hookflow.api.application.usecases.apiKey;

import com.hookflow.api.application.command.apiKey.CreateApiKeyCommand;
import com.hookflow.api.application.exceptions.ClientApplicationApiKeyLimitExceededException;
import com.hookflow.api.application.exceptions.ClientApplicationNotFoundException;
import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.domain.entities.ApiKey;

public class CreateApiKeyUseCase {
    private final ApiKeyGateway apiKeyGateway;
    private final ClientApplicationGateway clientApplicationGateway;

    public CreateApiKeyUseCase(ApiKeyGateway apiKeyGateway, ClientApplicationGateway clientApplicationGateway){
        this.apiKeyGateway = apiKeyGateway;
        this.clientApplicationGateway = clientApplicationGateway;
    }

    public String execute(CreateApiKeyCommand command){
        boolean applicationBelongsToUser = clientApplicationGateway.existsByIdAndOwnerId(command.clientApplicationId(), command.ownerId());

        if (!applicationBelongsToUser) {
            throw new ClientApplicationNotFoundException("Aplicacao nao encontrada");
        }

        long apiKeyCount = apiKeyGateway.countByClientApplicationId(command.clientApplicationId());

        if(apiKeyCount >= 3){
            throw new ClientApplicationApiKeyLimitExceededException("Essa aplicação excedeu o limite de API Keys");
        }

        String key = apiKeyGateway.createKey();
        String hashKey = apiKeyGateway.hashKey(key);
        ApiKey newApiKey = ApiKey.create(command.clientApplicationId(), hashKey);

        apiKeyGateway.save(newApiKey);

        return key;
    }
}
