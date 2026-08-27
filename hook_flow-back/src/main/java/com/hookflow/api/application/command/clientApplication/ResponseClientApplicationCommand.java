package com.hookflow.api.application.command.clientApplication;

import com.hookflow.api.application.command.apiKey.ResponseApiKeyCommand;
import com.hookflow.api.application.command.apiKey.ResponseApiKeySummaryCommand;

import java.util.List;
import java.util.UUID;

public record ResponseClientApplicationCommand(
        UUID id,
        UUID ownerId,
        String name,
        String description,
        boolean active,
        List<ResponseApiKeySummaryCommand> apiKeys
) {
}
