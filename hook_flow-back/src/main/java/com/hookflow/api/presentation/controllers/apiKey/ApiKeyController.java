package com.hookflow.api.presentation.controllers.apiKey;

import com.hookflow.api.application.command.apiKey.CreateApiKeyCommand;
import com.hookflow.api.application.usecases.apiKey.CreateApiKeyUseCase;
import com.hookflow.api.application.usecases.apiKey.RemoveApiKeyUseCase;
import com.hookflow.api.domain.entities.ApiKey;
import com.hookflow.api.infrastructure.persistence.security.AuthenticatedUser;
import com.hookflow.api.presentation.dtos.apiKey.ApiKeyResponseDTO;
import com.hookflow.api.presentation.dtos.apiKey.CreateApiKeyDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/hookflow-api/api-key")
public class ApiKeyController {
    private final CreateApiKeyUseCase createApiKeyUseCase;
    private final RemoveApiKeyUseCase removeApiKeyUseCase;

    public ApiKeyController(CreateApiKeyUseCase createApiKeyUseCase, RemoveApiKeyUseCase removeApiKeyUseCase){
        this.createApiKeyUseCase = createApiKeyUseCase;
        this.removeApiKeyUseCase = removeApiKeyUseCase;
    }

    @PostMapping
    public ResponseEntity<ApiKeyResponseDTO> create(@RequestBody CreateApiKeyDTO requestDTO, @AuthenticationPrincipal AuthenticatedUser authenticatedUser){
        CreateApiKeyCommand command = new CreateApiKeyCommand(
                requestDTO.applicationId(),
                authenticatedUser.getUser().getId()
        );


        return ResponseEntity.status(HttpStatus.CREATED).body(ApiKeyResponseDTO.fromCommand(createApiKeyUseCase.execute(command)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id){
        removeApiKeyUseCase.execute(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
