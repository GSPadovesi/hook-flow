package com.hookflow.api.application.command.clientApplication;

import java.util.UUID;

public record SearchClientApplicationCommand(
                UUID ownerId,
                Integer page,
                Integer size) {
}
