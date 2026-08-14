package com.hookflow.api.application.usecases.clientApplication;

import com.hookflow.api.application.command.clientApplication.RegisterClientApplicationCommand;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.domain.entities.ClientApplication;

public class CreateClientApplicationUseCase {
    private final ClientApplicationGateway clientApplicationGateway;

    public CreateClientApplicationUseCase(ClientApplicationGateway clientApplicationGateway){
        this.clientApplicationGateway = clientApplicationGateway;
    }

    public ClientApplication execute(RegisterClientApplicationCommand command){
        ClientApplication newClient = ClientApplication.create(
                command.ownerId(),
                command.name(),
                command.description()
        );

        return clientApplicationGateway.save(newClient);
    }
}
