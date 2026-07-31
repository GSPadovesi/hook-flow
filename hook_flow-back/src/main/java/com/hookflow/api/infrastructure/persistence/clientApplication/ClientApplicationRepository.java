package com.hookflow.api.infrastructure.persistence.clientApplication;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClientApplicationRepository extends JpaRepository<ClientApplicationEntity, UUID> {
}
