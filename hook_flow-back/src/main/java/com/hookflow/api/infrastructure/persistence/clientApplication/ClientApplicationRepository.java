package com.hookflow.api.infrastructure.persistence.clientApplication;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ClientApplicationRepository extends JpaRepository<ClientApplicationEntity, UUID> {
    List<ClientApplicationEntity> findAllByOwnerIdAndActiveTrue(UUID id, Pageable page);
    boolean existsByIdAndOwnerId(UUID applicationId, UUID ownerId);
}
