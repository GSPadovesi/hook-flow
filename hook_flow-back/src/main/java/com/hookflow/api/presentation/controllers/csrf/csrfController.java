package com.hookflow.api.presentation.controllers.csrf;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Irrelevante no cenario atual, o SPA do security seta o token csrf
@RestController
@RequestMapping("/hookflow-api")
public class csrfController {
    @GetMapping("/csrf")
    public ResponseEntity<Void> csrf(CsrfToken csrfToken) {
        csrfToken.getToken();
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
