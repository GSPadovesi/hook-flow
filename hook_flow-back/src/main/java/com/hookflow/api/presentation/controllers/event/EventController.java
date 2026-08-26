package com.hookflow.api.presentation.controllers.event;

import com.hookflow.api.infrastructure.persistence.security.AuthenticatedApplication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hookflow-api/events")
public class EventController {
    @GetMapping
    public String teste(@AuthenticationPrincipal AuthenticatedApplication authenticatedApplication){
        System.out.printf("Id da aplicação: %s \nId da chave da api: %s", authenticatedApplication.getApplicationId(), authenticatedApplication.getApiKeyId());
        return "Testando a validação da chave api pra acessar esse endpoint";
    }
}
