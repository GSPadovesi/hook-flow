package com.hookflow.api.application.usecases.clientApplication;

import com.hookflow.api.application.exceptions.ClientApplicationNotFoundException;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.domain.entities.ClientApplication;

import java.util.Optional;
import java.util.UUID;

public class RemoveClientApplicationUseCase {
    private final ClientApplicationGateway clientApplicationGateway;

    public RemoveClientApplicationUseCase(ClientApplicationGateway clientApplicationGateway){
        this.clientApplicationGateway = clientApplicationGateway;
    }

    public void execute(UUID id){
        ClientApplication clientApplication = clientApplicationGateway.findClientApplicationById(id)
                .orElseThrow(() -> new ClientApplicationNotFoundException("Nenhuma aplicação de cliente com o id=" + id +  ", não encontrado!"));

        clientApplication.remove();
        System.out.println(clientApplication.getName());
        clientApplicationGateway.save(clientApplication);

        return;
    }
}
