package com.hookflow.api.presentation.dtos.apiKey;

import com.hookflow.api.application.command.apiKey.ResponseApiKeyCommand;

import java.util.UUID;

public record ApiKeyResponseDTO(
        UUID id,
        boolean active
) {
    public static ApiKeyResponseDTO fromCommand(ResponseApiKeyCommand command) {
        return new ApiKeyResponseDTO(
                command.id(),
                command.active()
        );
    }
}
