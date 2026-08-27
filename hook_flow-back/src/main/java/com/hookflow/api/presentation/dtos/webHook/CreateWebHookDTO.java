package com.hookflow.api.presentation.dtos.webHook;

import java.util.UUID;

public record CreateWebHookDTO(
        UUID clientApplicationId,
        String url
) {
}
