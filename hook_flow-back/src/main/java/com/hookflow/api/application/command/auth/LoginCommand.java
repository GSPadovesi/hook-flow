package com.hookflow.api.application.command.auth;

public record LoginCommand(
        String email,
        String password
) {
}
