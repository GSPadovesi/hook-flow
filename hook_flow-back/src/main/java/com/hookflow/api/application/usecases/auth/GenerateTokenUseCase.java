package com.hookflow.api.application.usecases.auth;

import com.hookflow.api.application.exceptions.UserNotFoundException;
import com.hookflow.api.application.gateways.AuthGateway;
import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.domain.entities.User;

public class GenerateTokenUseCase {
    private final AuthGateway authGateway;
    private final UserGateway userGateway;

    public GenerateTokenUseCase(AuthGateway authGateway, UserGateway userGateway){
        this.authGateway = authGateway;
        this.userGateway = userGateway;
    }

    public String execute(String email){
        User user = userGateway.findUserByEmail(email.trim().toLowerCase())
                .orElseThrow(() -> new UserNotFoundException("Usuario nao encontrado"));

        return authGateway.generateAccessToken(user);
    }
}
