package com.hookflow.api.application.gateways;

import com.hookflow.api.domain.entities.User;

public interface AuthGateway {
    boolean passwordMatchers(String password, String passwordHash);
    String hashPassword(String password);
    String generateRefreshToken(User user);
    String generateAccessToken(User user);
}
