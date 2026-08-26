package com.hookflow.api.infrastructure.security;

import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.domain.entities.ApiKey;
import com.hookflow.api.infrastructure.persistence.security.AuthenticatedApplication;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class ApiKeyAuthenticationFilter extends OncePerRequestFilter {
    private final ApiKeyGateway apiKeyGateway;

    public ApiKeyAuthenticationFilter(ApiKeyGateway apiKeyGateway){
        this.apiKeyGateway = apiKeyGateway;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String apiKey = request.getHeader("FLOW-API-KEY");

            if (apiKey == null || apiKey.isBlank()) {
                filterChain.doFilter(request, response);
                return;
            }

            ApiKey apiKeyHash = apiKeyGateway.findByHashKey(apiKeyGateway.hashKey(apiKey))
                    .orElseThrow(() -> new RuntimeException("Erro"));

            if(!apiKeyHash.isActive()){
                filterChain.doFilter(request, response);
                return;
            }

            AuthenticatedApplication authenticatedApplication = new AuthenticatedApplication(
                    apiKeyHash.getClientApplicationId(),
                    apiKeyHash.getId()
            );

            ApiKeyAuthenticationToken authenticationToken = new ApiKeyAuthenticationToken(
                    authenticatedApplication
            );

            if (SecurityContextHolder.getContext().getAuthentication() == null) {
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        } catch (Exception e) {
            SecurityContextHolder.clearContext();
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return !request.getServletPath()
                .equals("/hookflow-api/events");
    }
}
