package com.hookflow.api.infrastructure.persistence.webHook;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface WebHookRepository extends JpaRepository<WebHookEntity, UUID> {
    List<WebHookEntity> findAllByClientApplicationIdIn(List<UUID> applicationsIds);
    Page<WebHookEntity> findAllByClientApplicationIdIn(List<UUID> applicationIds, Pageable pageable);
    Page<WebHookEntity> findAllWebHooksByClientApplicationId(UUID clientApplicationId, Pageable pageable);
}
