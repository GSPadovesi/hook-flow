package com.hookflow.api.application.exceptions;

public class ClientApplicationNotFoundException extends RuntimeException {
    public ClientApplicationNotFoundException(String message) {
        super(message);
    }
}
