package com.hookflow.api.presentation.dtos.apiKey;

import com.hookflow.api.application.command.apiKey.ResponseApiKeyCommand;
import com.hookflow.api.domain.entities.ApiKey;

import java.util.UUID;

public record ApiKeyResponseDTO(
        String key,
        ApiKey apiKey
) {
    public static ApiKeyResponseDTO fromCommand(ResponseApiKeyCommand command) {
        return new ApiKeyResponseDTO(
            command.key(),
            command.apiKey()
        );
    }
}
