package com.hookflow.api.infrastructure.gateway;

import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.domain.entities.ClientApplication;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationEntity;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationMapper;
import com.hookflow.api.infrastructure.persistence.clientApplication.ClientApplicationRepository;
import com.hookflow.api.infrastructure.persistence.user.UserEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public boolean existsById(UUID id) {
        return clientApplicationRepository.existsById(id);
    }
}
