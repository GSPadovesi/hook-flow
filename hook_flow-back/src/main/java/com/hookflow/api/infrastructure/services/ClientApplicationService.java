package com.hookflow.api.infrastructure.services;

import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.domain.entities.ClientApplication;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationEntity;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationMapper;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClientApplicationService implements ClientApplicationGateway {
    private final ClientApplicationRepository clientApplicationRepository;
    private final ClientApplicationMapper clientApplicationMapper;

    public ClientApplicationService(ClientApplicationRepository clientApplicationRepository, ClientApplicationMapper clientApplicationMapper){
        this.clientApplicationRepository = clientApplicationRepository;
        this.clientApplicationMapper = clientApplicationMapper;
    }

    @Transactional
    @Override
    public ClientApplication save(ClientApplication client) {
        ClientApplicationEntity clientApplicationEntity = clientApplicationRepository.save(clientApplicationMapper.fromDomain(client));
        return clientApplicationMapper.toDomain(clientApplicationEntity);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<ClientApplication> findClientApplicationById(UUID id) {
        return clientApplicationRepository.findById(id).map(clientApplicationMapper::toDomain);
    }

    @Transactional(readOnly = true)
    @Override
    public PageCommand<ClientApplication> findAllClientApplication(Integer page, Integer size, UUID ownerId) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ClientApplication> applicationsPage = clientApplicationRepository.findAllByOwnerIdAndActiveTrue(ownerId, pageable)
                .map(clientApplicationMapper::toDomain);

        return new PageCommand<>(
                applicationsPage.getContent(),
                applicationsPage.getNumber(),
                applicationsPage.getSize(),
                applicationsPage.getTotalPages(),
                applicationsPage.getTotalElements()
        );
    }

    @Override
    public List<ClientApplication> findAllClientApplication(UUID ownerId) {
        List<ClientApplication> applications =
                clientApplicationRepository
                        .findAllByOwnerIdAndActiveTrue(ownerId)
                        .stream()
                        .map(clientApplicationMapper::toDomain)
                        .toList();


        return applications;
    }

    @Transactional(readOnly = true)
    @Override
    public boolean existsById(UUID id) {
        return clientApplicationRepository.existsById(id);
    }

    @Transactional(readOnly = true)
    @Override
    public boolean existsByIdAndOwnerId(UUID applicationId, UUID ownerId) {
        return clientApplicationRepository.existsByIdAndOwnerId(applicationId, ownerId);
    }
}
