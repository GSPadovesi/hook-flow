package com.hookflow.api.presentation.dtos.auth;

import com.hookflow.api.domain.enums.UserRole;

import java.util.UUID;

public record UserResponseDTO(
        UUID id,
        String username,
        String name,
        String email,
        UserRole role
) {
}
