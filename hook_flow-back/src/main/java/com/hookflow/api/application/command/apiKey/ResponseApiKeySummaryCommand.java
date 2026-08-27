package com.hookflow.api.application.command.apiKey;

import java.util.UUID;

public record ResponseApiKeySummaryCommand (
    UUID id,
    boolean active
)
{
}
