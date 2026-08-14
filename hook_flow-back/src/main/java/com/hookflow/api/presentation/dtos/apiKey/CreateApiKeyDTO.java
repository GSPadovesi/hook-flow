package com.hookflow.api.presentation.dtos.apiKey;

import java.util.UUID;

public record CreateApiKeyDTO(
        UUID applicationId
) {
}
