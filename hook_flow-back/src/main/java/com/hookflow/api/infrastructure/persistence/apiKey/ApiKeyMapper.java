package com.hookflow.api.infrastructure.persistence.apiKey;

import com.hookflow.api.domain.entities.ApiKey;

public class ApiKeyMapper {
    public ApiKeyEntity fromDomain(ApiKey api){
        return new ApiKeyEntity(
                api.getId(),
                api.getClientApplicationId(),
                api.getHashKey(),
                api.isActive()
        );
    }

    public ApiKey toDomain(ApiKeyEntity api){
        return ApiKey.restore(
                api.getId(),
                api.getClientApplicationId(),
                api.getHashKey(),
                api.isActive()
        );
    }
}


