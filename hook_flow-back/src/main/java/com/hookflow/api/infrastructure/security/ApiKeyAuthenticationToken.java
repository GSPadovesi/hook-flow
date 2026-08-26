package com.hookflow.api.infrastructure.security;

import com.hookflow.api.infrastructure.persistence.security.AuthenticatedApplication;
import org.jspecify.annotations.Nullable;
import org.springframework.security.authentication.AbstractAuthenticationToken;

import java.util.List;

public class ApiKeyAuthenticationToken extends AbstractAuthenticationToken {
    private final AuthenticatedApplication principal;

    public ApiKeyAuthenticationToken(AuthenticatedApplication principal){
        super(List.of());
        this.principal = principal;
        setAuthenticated(true);
    }

    @Override
    public @Nullable Object getCredentials() {
        return null;
    }

    @Override
    public @Nullable Object getPrincipal() {
        return principal;
    }
}
