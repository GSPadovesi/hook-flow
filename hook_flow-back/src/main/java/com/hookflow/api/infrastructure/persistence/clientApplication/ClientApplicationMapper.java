package com.hookflow.api.infrastructure.persistence.clientApplication;

import com.hookflow.api.domain.entities.ClientApplication;

public class ClientApplicationMapper {
    public ClientApplicationEntity fromDomain(ClientApplication client){
        return new ClientApplicationEntity(
                client.getId(),
                client.getOwnerId(),
                client.getName(),
                client.getDescription(),
                client.isActive()
        );
    }

    public ClientApplication toDomain(ClientApplicationEntity client){
        return  ClientApplication.restore(
                client.getId(),
                client.getOwnerId(),
                client.getName(),
                client.getDescription(),
                client.isActive()
        );
    }

}
