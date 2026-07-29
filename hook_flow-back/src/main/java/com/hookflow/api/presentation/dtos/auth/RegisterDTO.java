package com.hookflow.api.presentation.dtos.auth;

public record RegisterDTO(
        String username,
        String name,
        String email,
        String password
) {
}
