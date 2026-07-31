package com.hookflow.api.application.gateways;

import com.hookflow.api.domain.entities.ClientApplication;

import java.util.Optional;
import java.util.UUID;

public interface ClientApplicationGateway {
    ClientApplication save(ClientApplication client);
    Optional<ClientApplication>findClientApplicationById(UUID id);
    boolean existsById(UUID id);
}
