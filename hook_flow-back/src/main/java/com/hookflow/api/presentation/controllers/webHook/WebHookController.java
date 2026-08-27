package com.hookflow.api.presentation.controllers.webHook;

import com.hookflow.api.application.command.webHook.CreateWebHookCommand;
import com.hookflow.api.application.usecases.webHook.CreateWebHookUseCase;
import com.hookflow.api.domain.entities.WebHook;
import com.hookflow.api.presentation.dtos.webHook.CreateWebHookDTO;
import com.hookflow.api.presentation.dtos.webHook.ResponseWebHookDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hookflow-api/web-hooks")
public class WebHookController {
    private final CreateWebHookUseCase createWebHookUseCase;

    public WebHookController(CreateWebHookUseCase createWebHookUseCase){
        this.createWebHookUseCase = createWebHookUseCase;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid CreateWebHookDTO requestDTO){
        CreateWebHookCommand command = new CreateWebHookCommand(
                requestDTO.clientApplicationId(),
                requestDTO.url()
        );

        ResponseWebHookDTO response = new ResponseWebHookDTO(createWebHookUseCase.execute(command));
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
