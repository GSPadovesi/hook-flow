package com.hookflow.api.application.command.apiKey;

import java.util.UUID;

public record ResponseApiKeyCommand(
        UUID id,
        boolean active
) {
}
