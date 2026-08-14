package com.hookflow.api.application.usecases.apiKey;

import com.hookflow.api.application.command.apiKey.CreateApiKeyCommand;
import com.hookflow.api.application.exceptions.ClientApplicationApiKeyLimitExceededException;
import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.domain.entities.ApiKey;

import java.util.List;
import java.util.UUID;

public class CreateApiKeyUseCase {
    private final ApiKeyGateway apiKeyGateway;

    public CreateApiKeyUseCase(ApiKeyGateway apiKeyGateway){
        this.apiKeyGateway = apiKeyGateway;
    }

    public String execute(CreateApiKeyCommand command){

        List<UUID>  keysByApplicationId = apiKeyGateway.findAllByClientApplicationId(command.clientApplicationId());

        if(keysByApplicationId.size() >= 3){
            throw new ClientApplicationApiKeyLimitExceededException("Essa aplicação excedeu o limite de API Keys");
        }


        String key = apiKeyGateway.createKey();
        String hashKey = apiKeyGateway.hashKey(key);
        ApiKey newApiKey = ApiKey.create(command.clientApplicationId(), hashKey);

        apiKeyGateway.save(newApiKey);

        return key;
    }
}
