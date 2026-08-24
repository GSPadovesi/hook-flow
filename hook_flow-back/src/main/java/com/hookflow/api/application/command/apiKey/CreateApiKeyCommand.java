package com.hookflow.api.application.command.apiKey;

import java.util.UUID;

public record CreateApiKeyCommand(
        UUID clientApplicationId,
        UUID ownerId
) {
}
