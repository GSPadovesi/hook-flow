package com.hookflow.api.application.command.webHook;

import java.util.UUID;

public record SearchWebHookCommand(
        UUID ownerId,
        UUID applicationId,
        int page,
        int size
) {
}
