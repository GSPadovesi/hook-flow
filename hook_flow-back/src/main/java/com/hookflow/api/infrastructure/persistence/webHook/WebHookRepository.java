package com.hookflow.api.infrastructure.persistence.webHook;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface WebHookRepository extends JpaRepository<WebHookEntity, UUID> {
}
