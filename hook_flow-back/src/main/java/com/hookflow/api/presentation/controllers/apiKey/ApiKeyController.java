package com.hookflow.api.presentation.controllers.apiKey;

import com.hookflow.api.application.command.apiKey.CreateApiKeyCommand;
import com.hookflow.api.application.usecases.apiKey.CreateApiKeyUseCase;
import com.hookflow.api.infrastructure.persistence.security.AuthenticatedUser;
import com.hookflow.api.presentation.dtos.apiKey.CreateApiKeyDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hookflow-api/api-key")
public class ApiKeyController {
    private final CreateApiKeyUseCase createApiKeyUseCase;

    public ApiKeyController(CreateApiKeyUseCase createApiKeyUseCase){
        this.createApiKeyUseCase = createApiKeyUseCase;
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody CreateApiKeyDTO requestDTO, @AuthenticationPrincipal AuthenticatedUser authenticatedUser){
        CreateApiKeyCommand command = new CreateApiKeyCommand(
                requestDTO.applicationId(),
                authenticatedUser.getUser().getId()
        );

        String key = createApiKeyUseCase.execute(command);
        return ResponseEntity.status(HttpStatus.CREATED).body(key);
    }
}
