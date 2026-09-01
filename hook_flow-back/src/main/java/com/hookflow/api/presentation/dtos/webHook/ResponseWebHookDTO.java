package com.hookflow.api.presentation.dtos.webHook;

import com.hookflow.api.application.command.webHook.ResponseWebHookCommand;
import com.hookflow.api.domain.entities.WebHook;

import java.util.List;
import java.util.UUID;

public record ResponseWebHookDTO (
        UUID id,
        UUID clientApplicationId,
        String url,
        boolean active,
        List<String> eventCategories
) {
    // Usado no create, onde o use case ainda retorna a entidade de dominio.
    public static ResponseWebHookDTO fromDomain(WebHook webHook) {
        return new ResponseWebHookDTO(
                webHook.getId(),
                webHook.getClientApplicationId(),
                webHook.getUrl(),
                webHook.isActive(),
                webHook.getEventCategories()
        );
    }

    // Usado no getAll, onde o use case retorna um command de resposta.
    public static ResponseWebHookDTO fromCommand(ResponseWebHookCommand command) {
        return new ResponseWebHookDTO(
                command.id(),
                command.clientApplicationId(),
                command.url(),
                command.active(),
                command.eventCategories()
        );
    }
}
