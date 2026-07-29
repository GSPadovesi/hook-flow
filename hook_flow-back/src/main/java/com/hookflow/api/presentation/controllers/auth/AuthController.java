package com.hookflow.api.presentation.controllers.auth;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.hookflow.api.application.command.auth.LoginCommand;
import com.hookflow.api.application.command.auth.RegisterCommand;
import com.hookflow.api.application.usecases.auth.GenerateTokenUseCase;
import com.hookflow.api.application.usecases.auth.LoginUseCase;
import com.hookflow.api.application.usecases.auth.RegisterUseCase;
import com.hookflow.api.infrastructure.security.AuthCookieFactory;
import com.hookflow.api.infrastructure.security.ValidateToken;
import com.hookflow.api.presentation.dtos.auth.LoginDTO;
import com.hookflow.api.presentation.dtos.auth.RegisterDTO;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Map;

@RestController
@RequestMapping("/hookflow-api/auth")
public class AuthController {
    private final RegisterUseCase registerUseCase;
    private final LoginUseCase loginUseCase;
    private final GenerateTokenUseCase generateTokenUseCase;
    private final AuthCookieFactory authCookieFactory;
    private final ValidateToken validateToken;

    public AuthController(RegisterUseCase registerUseCase, LoginUseCase loginUseCase, GenerateTokenUseCase generateTokenUseCase, AuthCookieFactory authCookieFactory, ValidateToken validateToken){
        this.registerUseCase = registerUseCase;
        this.loginUseCase = loginUseCase;
        this.generateTokenUseCase = generateTokenUseCase;
        this.authCookieFactory = authCookieFactory;
        this.validateToken = validateToken;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginDTO requestDTO){
        LoginCommand command = new LoginCommand(
                requestDTO.email(),
                requestDTO.password()
        );

        Map<String, String> tokens = loginUseCase.execute(command);

        ResponseCookie refreshToken = authCookieFactory.createRefreshTokenCookie(tokens.get("refresh_token"));
        ResponseCookie accessToken = authCookieFactory.createAccessTokenCookie(tokens.get("access_token"));

        return ResponseEntity
                .status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, refreshToken.toString())
                .header(HttpHeaders.SET_COOKIE, accessToken.toString())
                .build();
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
        ResponseCookie accessToken = authCookieFactory.createAccessTokenCookie(tokens.get("access_token"));

        return ResponseEntity
                .status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, refreshToken.toString())
                .header(HttpHeaders.SET_COOKIE, accessToken.toString())
                .build();
    }

    @PostMapping("/refresh")
    public ResponseEntity<Void> refreshAccess(HttpServletRequest request){
        if(request.getCookies() == null){
            throw new RuntimeException("Cookie invalido");
        }

        String token = Arrays.stream(request.getCookies())
                .filter(cookie -> "refreshToken".equals(cookie.getName()))
                .map(Cookie::getValue)
                .findFirst()
                .orElse(null);

        if(token == null){
            throw new RuntimeException("Cookie invalido");
        }

        DecodedJWT tokenValid = validateToken.execute(token);

        if (!"refresh".equals(tokenValid.getClaim("type").asString())){
            throw new RuntimeException("Cookie invalido");
        }

        String newToken = generateTokenUseCase.execute(tokenValid.getSubject());
        ResponseCookie newCookie = authCookieFactory.createAccessTokenCookie(newToken);

        return ResponseEntity
                .status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, newCookie.toString())
                .build();
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(){
        ResponseCookie refreshCookie = authCookieFactory.removeRefreshTokenCookie();
        ResponseCookie accessCookie = authCookieFactory.removeAccessTokenCookie();

        return ResponseEntity
                .status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, refreshCookie.toString())
                .header(HttpHeaders.SET_COOKIE, accessCookie.toString())
                .build();
    }
}
