package com.hookflow.api.infrastructure.services;

import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.domain.entities.ClientApplication;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationEntity;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationMapper;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationRepository;
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

    @Override
    public List<ClientApplication> findAllClientApplication(Integer page, UUID ownerId) {
        Pageable pageable = PageRequest.of(page, 10);
        List<ClientApplication> applications =
                clientApplicationRepository
                        .findAllByOwnerId(ownerId, pageable)
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
