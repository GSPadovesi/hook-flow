package com.hookflow.api.application.command.clientApplication;

import java.util.UUID;

public record RegisterClientApplicationCommand(
    UUID ownerId,
    String name,
    String description
) {
}
