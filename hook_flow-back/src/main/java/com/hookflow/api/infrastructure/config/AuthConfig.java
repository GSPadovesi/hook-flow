package com.hookflow.api.infrastructure.config;

import com.hookflow.api.application.gateways.AuthGateway;
import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.application.usecases.auth.GenerateTokenUseCase;
import com.hookflow.api.application.usecases.auth.LoginUseCase;
import com.hookflow.api.application.usecases.auth.RegisterUseCase;
import com.hookflow.api.infrastructure.security.AuthCookieFactory;
import com.hookflow.api.infrastructure.security.ValidateToken;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AuthConfig {
    @Bean
    GenerateTokenUseCase generateTokenUseCase(AuthGateway authGateway, UserGateway userGateway){
        return new GenerateTokenUseCase(authGateway, userGateway);
    }

    @Bean
    LoginUseCase loginUseCase(UserGateway userGateway, AuthGateway authGateway){
        return new LoginUseCase(userGateway, authGateway);
    }
    @Bean
    RegisterUseCase registerUseCase(UserGateway userGateway, AuthGateway authGateway){
        return new RegisterUseCase(userGateway, authGateway);
    }

    @Bean
    ValidateToken validateToken(@Value("${jwt.secret.api}") String secretKey,  @Value("${spring.application.name}") String issuer){
        return new ValidateToken(secretKey, issuer);
    }

    @Bean
    AuthCookieFactory authCookieFactory(){
        return new AuthCookieFactory();
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
