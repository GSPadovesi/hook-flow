package com.hookflow.api.presentation.dtos.auth;

public record LoginDTO(
        String email,
        String password
) {
}
