package com.hookflow.api.infrastructure.config;

import com.hookflow.api.application.gateways.AuthGateway;
import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.application.usecases.auth.LoginUseCase;
import com.hookflow.api.application.usecases.auth.RegisterUseCase;
import com.hookflow.api.infrastructure.security.AuthCookieFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AuthConfig {
    @Bean
    AuthCookieFactory authCookieFactory(){
        return new AuthCookieFactory();
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
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
