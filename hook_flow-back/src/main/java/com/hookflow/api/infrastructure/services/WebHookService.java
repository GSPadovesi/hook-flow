package com.hookflow.api.infrastructure.services;

import com.hookflow.api.application.gateways.WebHookGateway;
import com.hookflow.api.domain.entities.WebHook;
import com.hookflow.api.infrastructure.persistence.webHook.WebHookEntity;
import com.hookflow.api.infrastructure.persistence.webHook.WebHookMapper;
import com.hookflow.api.infrastructure.persistence.webHook.WebHookRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WebHookService implements WebHookGateway {
    private final WebHookRepository webHookRepository;
    private final WebHookMapper webHookMapper;

    public WebHookService(WebHookRepository webHookRepository, WebHookMapper webHookMapper){
        this.webHookRepository = webHookRepository;
        this.webHookMapper = webHookMapper;
    }

    @Transactional
    @Override
    public WebHook save(WebHook webHook) {
        WebHookEntity webHookSaved = webHookRepository.save(webHookMapper.fromDomain(webHook));
        return webHookMapper.toDomain(webHookSaved);
    }
}
