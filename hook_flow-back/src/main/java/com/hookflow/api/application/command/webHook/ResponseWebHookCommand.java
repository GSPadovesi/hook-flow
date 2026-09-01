package com.hookflow.api.application.command.webHook;

import java.util.List;
import java.util.UUID;

public record ResponseWebHookCommand(
        UUID id,
        UUID clientApplicationId,
        String url,
        boolean active,
        List<String> eventCategories
) {
}
