package com.hookflow.api.application.command.clientApplication;

public record RegisterClientApplicationCommand(
    String name,
    String description
) {
}
