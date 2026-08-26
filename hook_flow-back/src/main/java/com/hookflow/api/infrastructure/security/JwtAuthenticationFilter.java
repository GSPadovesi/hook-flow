package com.hookflow.api.infrastructure.security;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.hookflow.api.application.gateways.UserGateway;
import com.hookflow.api.infrastructure.persistence.security.AuthenticatedUser;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final UserGateway userGateway;
    private final ValidateToken validateToken;

    public JwtAuthenticationFilter(UserGateway userGateway, ValidateToken validateToken) {
        this.userGateway = userGateway;
        this.validateToken = validateToken;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("Entrei no filtro do api key");
        try {
            String token = getTokenAccessToken(request);

            if(token == null){
                filterChain.doFilter(request, response);
                return;
            }

            DecodedJWT tokenValid = validateToken.execute(token);

            if (!"access".equals(tokenValid.getClaim("type").asString())) {
                filterChain.doFilter(request, response);
                return;
            }

            AuthenticatedUser authenticatedUser = new AuthenticatedUser(
                    userGateway
                            .findUserByEmail(tokenValid.getSubject())
                            .orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado"))
            );

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    authenticatedUser,
                    null,
                    authenticatedUser.getAuthorities()
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
        return request.getServletPath()
                .equals("/hookflow-api/events");
    }

    private String getTokenAccessToken(HttpServletRequest request){
        if(request.getCookies() == null) return null;

        return Arrays.stream(request
                        .getCookies())
                .sequential()
                .filter(cookie -> "accessToken".equals(cookie.getName()))
                .map(Cookie::getValue)
                .findFirst()
                .orElse(null);
    }
}
