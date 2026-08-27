package com.hookflow.api.application.command.apiKey;

import com.hookflow.api.domain.entities.ApiKey;

import java.util.UUID;

public record ResponseApiKeyCommand(
        String key,
        ApiKey apiKey
) {
}
