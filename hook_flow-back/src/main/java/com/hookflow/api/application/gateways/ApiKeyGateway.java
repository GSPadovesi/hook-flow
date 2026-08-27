package com.hookflow.api.application.gateways;

import com.hookflow.api.domain.entities.ApiKey;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ApiKeyGateway {
    ApiKey save(ApiKey apiKey);
    String createKey();
    String hashKey(String key);
    List<ApiKey> findAllByClientApplicationIdIn(List<UUID> applicationsIds);
    long countByClientApplicationId(UUID applicationId);
    Optional<ApiKey> findByHashKey(String hash);
    Optional<ApiKey> findById(UUID id);
}
