package com.hookflow.api.presentation.controllers.clientApplication;

import com.hookflow.api.application.command.clientApplication.RegisterClientApplicationCommand;
import com.hookflow.api.application.command.clientApplication.ResponseClientApplicationCommand;
import com.hookflow.api.application.command.clientApplication.SearchClientApplicationCommand;
import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.application.usecases.clientApplication.CreateClientApplicationUseCase;
import com.hookflow.api.application.usecases.clientApplication.GetAllClientApplicationUseCase;
import com.hookflow.api.application.usecases.clientApplication.RemoveClientApplicationUseCase;
import com.hookflow.api.infrastructure.persistence.security.AuthenticatedUser;
import com.hookflow.api.presentation.dtos.clientApplication.ClientApplicationResponseDTO;
import com.hookflow.api.presentation.dtos.clientApplication.CreateClientApplicationDTO;
import jakarta.validation.Valid;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Pageable;
import java.util.UUID;

@RestController
@RequestMapping("/hookflow-api/client")
public class ClientApplicationController {
    private final CreateClientApplicationUseCase createClientApplicationUseCase;
    private final GetAllClientApplicationUseCase getAllClientApplicationUseCase;
    private final RemoveClientApplicationUseCase removeClientApplicationUseCase;

    public ClientApplicationController(CreateClientApplicationUseCase createClientApplicationUseCase, GetAllClientApplicationUseCase getAllClientApplicationUseCase, RemoveClientApplicationUseCase removeClientApplicationUseCase){
        this.createClientApplicationUseCase = createClientApplicationUseCase;
        this.getAllClientApplicationUseCase = getAllClientApplicationUseCase;
        this.removeClientApplicationUseCase = removeClientApplicationUseCase;
    }

    @PostMapping
    public ResponseEntity<ClientApplicationResponseDTO> createClientApplication(@RequestBody @Valid CreateClientApplicationDTO requestDTO, @AuthenticationPrincipal AuthenticatedUser authentication){
        RegisterClientApplicationCommand command = new RegisterClientApplicationCommand(
                authentication.getUser().getId(),
                requestDTO.name(),
                requestDTO.description()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(ClientApplicationResponseDTO.fromDomain(createClientApplicationUseCase.execute(command)));
    }

    @GetMapping
    public ResponseEntity<PageCommand<ClientApplicationResponseDTO>> getAll(@PageableDefault(page = 0, size = 10) Pageable pageable, @AuthenticationPrincipal AuthenticatedUser authenticatedUser){
        SearchClientApplicationCommand command = new SearchClientApplicationCommand(
                authenticatedUser.getUser().getId(),
                pageable.getPageNumber(),
                pageable.getPageSize()
        );

        PageCommand<ResponseClientApplicationCommand> result = getAllClientApplicationUseCase.execute(command);

        return ResponseEntity.status(HttpStatus.OK).body(new PageCommand<>(
                result.content()
                        .stream()
                        .map(ClientApplicationResponseDTO::fromDomain)
                        .toList(),
                result.page(),
                result.size(),
                result.totalPages(),
                result.totalElements()
        ));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable  UUID id){
        removeClientApplicationUseCase.execute(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
