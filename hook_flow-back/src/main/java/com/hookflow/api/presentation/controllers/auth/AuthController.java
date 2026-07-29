package com.hookflow.api.presentation.controllers.auth;

import com.hookflow.api.application.command.auth.RegisterCommand;
import com.hookflow.api.application.usecases.auth.LoginUseCase;
import com.hookflow.api.application.usecases.auth.RegisterUseCase;
import com.hookflow.api.infrastructure.security.AuthCookieFactory;
import com.hookflow.api.presentation.dtos.auth.RegisterDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/hookflow-api/auth")
public class AuthController {
    private final RegisterUseCase registerUseCase;
    private final LoginUseCase loginUseCase;
    private final AuthCookieFactory authCookieFactory;

    public AuthController(RegisterUseCase registerUseCase, LoginUseCase loginUseCase, AuthCookieFactory authCookieFactory){
        this.registerUseCase = registerUseCase;
        this.loginUseCase = loginUseCase;
        this.authCookieFactory = authCookieFactory;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(){
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid RegisterDTO requestDTO){
        RegisterCommand command = new RegisterCommand(
                requestDTO.username(),
                requestDTO.name(),
                requestDTO.email(),
                requestDTO.password()
        );

        Map<String, String> tokens = registerUseCase.execute(command);

        ResponseCookie refreshToken = authCookieFactory.createRefreshTokenCookie(tokens.get("refresh_token"));
        ResponseCookie acessToken = authCookieFactory.createAccessTokenCookie(tokens.get("access_token"));

        return ResponseEntity
                .status(HttpStatus.OK)
//                .header(HttpHeaders.SET_COOKIE, refreshToken.toString())
//                .header(HttpHeaders.SET_COOKIE, accessToken.toString())
                .body(tokens.get("refresh_token"));
    }
}
