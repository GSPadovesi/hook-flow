package com.hookflow.api.presentation.dtos.clientApplication;

import java.util.UUID;

public record CreateClientApplicationDTO(
        String name,
        String description
) {

}
