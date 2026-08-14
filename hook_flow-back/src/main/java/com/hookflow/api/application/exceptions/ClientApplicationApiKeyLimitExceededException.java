package com.hookflow.api.application.exceptions;

public class ClientApplicationApiKeyLimitExceededException extends RuntimeException {
    public ClientApplicationApiKeyLimitExceededException(String message) {
        super(message);
    }
}
