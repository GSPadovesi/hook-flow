package com.hookflow.api.infrastructure.persistence.security;

import java.util.UUID;

public class AuthenticatedApplication {
    private UUID applicationId;
    private UUID apiKeyId;

    public AuthenticatedApplication(UUID applicationId, UUID apiKeyId){
        this.applicationId = applicationId;
        this.apiKeyId = apiKeyId;
    }

    public UUID getApplicationId(){
        return applicationId;
    }

    public UUID getApiKeyId(){
        return apiKeyId;
    }
}
