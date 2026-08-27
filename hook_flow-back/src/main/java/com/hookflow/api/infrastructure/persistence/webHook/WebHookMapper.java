package com.hookflow.api.infrastructure.persistence.webHook;

import com.hookflow.api.domain.entities.WebHook;

public class WebHookMapper {
    public WebHookEntity fromDomain(WebHook webHook){
        return new WebHookEntity(
            webHook.getId(),
            webHook.getClientApplicationId(),
            webHook.getUrl(),
            webHook.isActive(),
            webHook.getEventCategories()
        );
    }

    public WebHook toDomain(WebHookEntity webHook){
        return WebHook.restore(
                webHook.getId(),
                webHook.getClientApplicationId(),
                webHook.getUrl(),
                webHook.isActive(),
                webHook.getEventCategories()
        );
    }
}
