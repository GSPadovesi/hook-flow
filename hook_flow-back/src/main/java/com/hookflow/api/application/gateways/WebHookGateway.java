package com.hookflow.api.application.gateways;

import com.hookflow.api.domain.entities.WebHook;

public interface WebHookGateway {
    WebHook save(WebHook webHook);
}
