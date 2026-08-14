package com.hookflow.api.application.usecases.auth;

import com.hookflow.api.application.command.auth.RegisterCommand;
import com.hookflow.api.application.exceptions.UserAlreadyExistsException;
import com.hookflow.api.application.gateways.AuthGateway;
import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.domain.entities.User;

import java.util.HashMap;
import java.util.Map;

public class RegisterUseCase {
    private final UserGateway userGateway;
    private final AuthGateway authGateway;

    public RegisterUseCase(UserGateway userGateway, AuthGateway authGateway){
        this.userGateway = userGateway;
        this.authGateway = authGateway;
    }

    public Map<String, String> execute(RegisterCommand command){
        if(userGateway.existsByEmail(command.email()) || userGateway.existsByUsername(command.username())){
            throw new UserAlreadyExistsException("E-mail ou Usuário ja cadastrado");
        }

        String newPassword = authGateway.hashPassword(command.password());

        User user = User.create(command.username(), command.name(), command.email(), newPassword);
        User savedUser = userGateway.save(user);

        String refreshToken = authGateway.generateRefreshToken(savedUser);
        String accessToken = authGateway.generateAccessToken(savedUser);

        Map<String, String> response = new HashMap<>();

        response.put("refresh_token", refreshToken);
        response.put("access_token", accessToken);

        return response;
    }
}
