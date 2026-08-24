package com.hookflow.api.application.gateways;

import com.hookflow.api.domain.entities.ApiKey;

import java.util.List;
import java.util.UUID;

public interface ApiKeyGateway {
    ApiKey save(ApiKey apiKey);
    String createKey();
    String hashKey(String key);
    List<ApiKey> findAllByClientApplicationIdIn(List<UUID> applicationsIds);
    long countByClientApplicationId(UUID applicationId);
}
