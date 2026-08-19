package com.hookflow.api.presentation.controllers.user;

import com.hookflow.api.infrastructure.persistence.security.AuthenticatedUser;
import com.hookflow.api.presentation.dtos.auth.UserResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hookflow-api")
public class UserController {

    @GetMapping("/user")
    public ResponseEntity<UserResponseDTO> getUser(@AuthenticationPrincipal AuthenticatedUser authentication) {
        UserResponseDTO response = new UserResponseDTO(
                authentication.getUser().getId(),
                authentication.getUser().getUsername(),
                authentication.getUser().getName(),
                authentication.getUser().getEmail(),
                authentication.getUser().getRole()
        );
        return ResponseEntity.ok(response);
    }
}