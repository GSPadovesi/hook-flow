package com.hookflow.api.application.command.auth;

public record RegisterCommand(
        String username,
        String name,
        String email,
        String password
) {
}
