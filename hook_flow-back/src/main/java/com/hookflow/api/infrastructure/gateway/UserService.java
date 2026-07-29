package com.hookflow.api.infrastructure.gateway;

import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.domain.entities.User;
import com.hookflow.api.infrastructure.persistence.user.UserEntity;
import com.hookflow.api.infrastructure.persistence.user.UserMapper;
import com.hookflow.api.infrastructure.persistence.user.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService implements UserGateway {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Transactional
    @Override
    public User save(User user) {
        UserEntity savedUser = userRepository.save(userMapper.fromDomain(user));
        return userMapper.toDomain(savedUser);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findUserById(UUID id) {
        return userRepository.findById(id)
                .map(userMapper::toDomain);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email.trim().toLowerCase())
                .map(userMapper::toDomain);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findUserByUsername(String username) {
        return userRepository.findByUsername(username.trim().toLowerCase())
                .map(userMapper::toDomain);
    }

    @Transactional(readOnly = true)
    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email.trim().toLowerCase());
    }

    @Transactional(readOnly = true)
    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username.trim().toLowerCase());
    }
}
