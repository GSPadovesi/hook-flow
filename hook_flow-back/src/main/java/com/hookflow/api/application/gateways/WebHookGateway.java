package com.hookflow.api.application.gateways;

import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.domain.entities.WebHook;

import java.util.List;
import java.util.UUID;

public interface WebHookGateway {
    WebHook save(WebHook webHook);
    PageCommand<WebHook> findAllWebHooksByClientApplicationId(UUID applicationId, Integer page, Integer size);
    PageCommand<WebHook> findAllByClientApplicationIdIn(List<UUID> applicationsIds, Integer page, Integer size);
    List<WebHook> findAllByClientApplicationIdIn(List<UUID> applicationsIds);
}
