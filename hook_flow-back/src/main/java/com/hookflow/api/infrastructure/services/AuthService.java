package com.hookflow.api.infrastructure.services;

import com.auth0.jwt.JWT;
import com.hookflow.api.application.gateways.AuthGateway;
import com.hookflow.api.domain.entities.User;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Service
public class AuthService implements AuthGateway {
    @Value("${jwt.secret.api}")
    private String secretKey;
    @Value("${spring.application.name}")
    private String issuer;
    private final PasswordEncoder passwordEncoder;

    public AuthService(PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    @Override
    public boolean passwordMatchers(String password, String passwordHash) {
        return passwordEncoder.matches(password, passwordHash);
    }

    @Transactional
    @Override
    public String hashPassword(String password) {
        return passwordEncoder.encode(password);
    }

    @Transactional
    @Override
    public String generateRefreshToken(User user) {
        try{
            Algorithm algorithm = Algorithm.HMAC256(secretKey);
            return JWT.create()
                    .withIssuer(issuer)
                    .withSubject(user.getEmail())
                    .withClaim("role", user.getRole().name())
                    .withClaim("userId", user.getId().toString())
                    .withClaim("type", "refresh")
                    .withExpiresAt(Instant.now().plus(7, ChronoUnit.DAYS))
                    .sign(algorithm);
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    @Transactional
    @Override
    public String generateAccessToken(User user) {
        try{
            Algorithm algorithm = Algorithm.HMAC256(secretKey);
            return JWT.create()
                    .withIssuer(issuer)
                    .withSubject(user.getEmail())
                    .withClaim("role", user.getRole().name())
                    .withClaim("userId", user.getId().toString())
                    .withClaim("type", "access")
                    .withExpiresAt(Instant.now().plus(15, ChronoUnit.MINUTES))
                    .sign(algorithm);
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
