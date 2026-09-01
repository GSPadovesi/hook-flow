package com.hookflow.api.application.gateways;

import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.domain.entities.ClientApplication;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ClientApplicationGateway {
    ClientApplication save(ClientApplication client);
    Optional<ClientApplication>findClientApplicationById(UUID id);
    PageCommand<ClientApplication> findAllClientApplication(Integer page, Integer size, UUID ownerId);
    List<ClientApplication> findAllClientApplication(UUID ownerId);
    boolean existsById(UUID id);
    boolean existsByIdAndOwnerId(UUID applicationId, UUID ownerId);
}
