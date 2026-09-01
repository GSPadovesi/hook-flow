package com.hookflow.api.infrastructure.services;

import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.application.gateways.WebHookGateway;
import com.hookflow.api.domain.entities.ApiKey;
import com.hookflow.api.domain.entities.WebHook;
import com.hookflow.api.infrastructure.persistence.webHook.WebHookEntity;
import com.hookflow.api.infrastructure.persistence.webHook.WebHookMapper;
import com.hookflow.api.infrastructure.persistence.webHook.WebHookRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

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

    @Override
    public PageCommand<WebHook> findAllWebHooksByClientApplicationId(UUID applicationId, Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<WebHook> webHookPage = webHookRepository.findAllWebHooksByClientApplicationId(applicationId, pageable)
                .map(webHookMapper::toDomain);

        return new PageCommand<>(
                webHookPage.getContent(),
                webHookPage.getNumber(),
                webHookPage.getSize(),
                webHookPage.getTotalPages(),
                webHookPage.getTotalElements()
        );
    }

    @Override
    public PageCommand<WebHook> findAllByClientApplicationIdIn(List<UUID> applicationsIds, Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<WebHook> webHookPage = webHookRepository.findAllByClientApplicationIdIn(applicationsIds, pageable)
                .map(webHookMapper::toDomain);

        return new PageCommand<>(
                webHookPage.getContent(),
                webHookPage.getNumber(),
                webHookPage.getSize(),
                webHookPage.getTotalPages(),
                webHookPage.getTotalElements()
        );
    }

    @Transactional(readOnly = true)
    @Override
    public List<WebHook> findAllByClientApplicationIdIn(List<UUID> applicationsIds) {
        return webHookRepository.findAllByClientApplicationIdIn(applicationsIds)
                .stream()
                .map(webHookMapper::toDomain)
                .toList();
    }
}
