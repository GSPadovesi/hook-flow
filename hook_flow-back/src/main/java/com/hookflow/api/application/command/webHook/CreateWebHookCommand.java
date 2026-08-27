package com.hookflow.api.application.command.webHook;

import java.util.UUID;

public record CreateWebHookCommand(
        UUID clientApplicationId,
        String url
) {
}
