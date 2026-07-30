package com.hookflow.api.application.usecases.auth;

import com.hookflow.api.application.exceptions.UserNotFoundException;
import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.domain.entities.User;

public class GetUserUseCase {
    private final UserGateway userGateway;

    public GetUserUseCase(UserGateway userGateway){
        this.userGateway = userGateway;
    }

    public User execute(String email){
        return userGateway.findUserByEmail(email).orElseThrow(() -> new UserNotFoundException("Usuario nao encontrado"));
    }
}
