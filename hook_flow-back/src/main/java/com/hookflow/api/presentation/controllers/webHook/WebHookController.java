package com.hookflow.api.presentation.controllers.webHook;

import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.application.command.webHook.CreateWebHookCommand;
import com.hookflow.api.application.command.webHook.ResponseWebHookCommand;
import com.hookflow.api.application.command.webHook.SearchWebHookCommand;
import com.hookflow.api.application.usecases.webHook.CreateWebHookUseCase;
import com.hookflow.api.application.usecases.webHook.GetAllWebHookUseCase;
import com.hookflow.api.infrastructure.persistence.security.AuthenticatedUser;
import com.hookflow.api.presentation.dtos.webHook.CreateWebHookDTO;
import com.hookflow.api.presentation.dtos.webHook.ResponseWebHookDTO;
import jakarta.validation.Valid;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("hookflow-api/web-hooks")
public class WebHookController {
    private final CreateWebHookUseCase createWebHookUseCase;
    private final GetAllWebHookUseCase getAllWebHook;

    public WebHookController(CreateWebHookUseCase createWebHookUseCase, GetAllWebHookUseCase getAllWebHook){
        this.createWebHookUseCase = createWebHookUseCase;
        this.getAllWebHook = getAllWebHook;
    }

    @GetMapping
    public ResponseEntity<PageCommand<ResponseWebHookDTO>> getAll(@RequestParam UUID applicationId, @PageableDefault(page = 0, size = 10) Pageable pageable, @AuthenticationPrincipal AuthenticatedUser authenticatedUser){
        SearchWebHookCommand command = new SearchWebHookCommand(
                authenticatedUser.getUser().getId(),
                applicationId,
                pageable.getPageNumber(),
                pageable.getPageSize()
        );

        PageCommand<ResponseWebHookCommand> result = getAllWebHook.getAll(command);

        return ResponseEntity.status(HttpStatus.OK).body(new PageCommand<>(
                result.content()
                        .stream()
                        .map(ResponseWebHookDTO::fromCommand)
                        .toList(),
                result.page(),
                result.size(),
                result.totalPages(),
                result.totalElements()
        ));
    }

    @PostMapping
    public ResponseEntity<ResponseWebHookDTO> create(@RequestBody @Valid CreateWebHookDTO requestDTO){
        CreateWebHookCommand command = new CreateWebHookCommand(
                requestDTO.clientApplicationId(),
                requestDTO.url()
        );

        ResponseWebHookDTO response = ResponseWebHookDTO.fromDomain(createWebHookUseCase.execute(command));
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
