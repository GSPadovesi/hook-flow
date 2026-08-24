package com.hookflow.api.infrastructure.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class ApiKeyAuthenticationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String apikey = request.getHeader("FLOW-API-KEY");
        // 1. verifica se veio
        // 2. gera hash
        // 3. busca ApiKey
        // 4. verifica active
        // 5. recupera applicationId
        // 6. cria Authentication
        // 7. SecurityContextHolder.getContext()
        //        .setAuthentication(authentication);
        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return !request.getServletPath()
                .equals("/hookflow-api/events");
    }
}
