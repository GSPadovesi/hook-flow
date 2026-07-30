package com.hookflow.api.presentation.dtos.auth;

import com.hookflow.api.domain.enums.UserRole;

public record UserResponseDTO(
        String username,
        String name,
        String email,
        UserRole role
) {
}
