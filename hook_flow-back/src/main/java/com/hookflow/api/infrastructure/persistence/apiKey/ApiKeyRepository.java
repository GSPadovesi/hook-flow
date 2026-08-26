package com.hookflow.api.infrastructure.persistence.apiKey;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ApiKeyRepository extends JpaRepository<ApiKeyEntity, UUID> {
    List<ApiKeyEntity> findAllByClientApplicationIdIn(List<UUID> clientApplicationIds);
    long countByClientApplicationId(UUID applicationId);
    Optional<ApiKeyEntity> findByHashKey(String hash);
}
