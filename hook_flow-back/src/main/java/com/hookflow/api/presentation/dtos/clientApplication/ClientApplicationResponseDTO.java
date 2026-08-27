package com.hookflow.api.presentation.dtos.clientApplication;

import com.hookflow.api.application.command.clientApplication.ResponseClientApplicationCommand;
import com.hookflow.api.domain.entities.ClientApplication;
import com.hookflow.api.presentation.dtos.apiKey.ResponseApiKeySummaryCommand;

import java.util.List;
import java.util.UUID;

public record ClientApplicationResponseDTO(
        UUID id,
        UUID ownerId,
        String name,
        String description,
        boolean active,
        List<ResponseApiKeySummaryCommand> keys
) {
    public static ClientApplicationResponseDTO fromDomain(ClientApplication clientApplication) {
        return new ClientApplicationResponseDTO(
                clientApplication.getId(),
                clientApplication.getOwnerId(),
                clientApplication.getName(),
                clientApplication.getDescription(),
                clientApplication.isActive(),
                List.of()
        );
    }

    public static ClientApplicationResponseDTO fromDomain(ResponseClientApplicationCommand command) {
        return new ClientApplicationResponseDTO(
                command.id(),
                command.ownerId(),
                command.name(),
                command.description(),
                command.active(),
                command.apiKeys()
                        .stream()
                        .map(key -> new ResponseApiKeySummaryCommand(
                                key.id(),
                                key.active()
                        ))
                        .toList()
        );
    }
}
