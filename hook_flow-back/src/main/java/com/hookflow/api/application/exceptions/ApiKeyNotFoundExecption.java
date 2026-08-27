package com.hookflow.api.application.exceptions;

public class ApiKeyNotFoundExecption extends RuntimeException {
    public ApiKeyNotFoundExecption(String message) {
        super(message);
    }
}
