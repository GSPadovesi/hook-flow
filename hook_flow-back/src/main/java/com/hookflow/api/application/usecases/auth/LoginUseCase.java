package com.hookflow.api.application.usecases.auth;

import com.hookflow.api.application.command.auth.LoginCommand;
import com.hookflow.api.application.exceptions.UserNotFoundException;
import com.hookflow.api.application.gateways.AuthGateway;
import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.domain.entities.User;

import java.util.HashMap;
import java.util.Map;

public class LoginUseCase {
    private final UserGateway userGateway;
    private final AuthGateway authGateway;

    public LoginUseCase(UserGateway userGateway, AuthGateway authGateway){
        this.userGateway = userGateway;
        this.authGateway = authGateway;
    }

    public Map<String, String> execute(LoginCommand command){
        User user = userGateway.findUserByEmail(command.email())
                .orElseThrow(() -> new UserNotFoundException("Usuario nao encontrado"));

        boolean validatePassword = authGateway.passwordMatchers(command.password(), user.getPassword());

        if (!validatePassword) {
            throw new RuntimeException("Senha invalida");
        }

        String refreshToken = authGateway.generateRefreshToken(user);
        String accessToken = authGateway.generateAccessToken(user);

        Map<String, String> response = new HashMap<>();

        response.put("refresh_token", refreshToken);
        response.put("access_token", accessToken);

        return response;
    }
}
