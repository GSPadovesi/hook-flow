package com.hookflow.api.application.gateways;

import com.hookflow.api.domain.entities.User;

import java.util.Optional;
import java.util.UUID;

public interface UserGateway {
    User save(User user);
    Optional<User> findUserById(UUID id);
    Optional<User> findUserByEmail(String email);
    Optional<User> findUserByUsername(String username);
    boolean existsByEmail(String email);
    boolean existsByUsername(String email);
}
