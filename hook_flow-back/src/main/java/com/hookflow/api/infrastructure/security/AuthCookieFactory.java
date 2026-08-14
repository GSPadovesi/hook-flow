package com.hookflow.api.infrastructure.security;

import org.springframework.http.ResponseCookie;

public class AuthCookieFactory {
    private static final int ACCESS_TOKEN_MAX_AGE_SECONDS = 15 * 60;
    private static final int REFRESH_TOKEN_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;
    private static final int CSRF_TOKEN_AGE_SECONDS = 1 * 24 * 60;
    private static final int TOKEN_REMOVE = 0;
    private static final String ACCESS_TOKEN_COOKIE = "accessToken";
    private static final String REFRESH_TOKEN_COOKIE = "refreshToken";
    private static final String CSRF_TOKEN_COOKIE = "XSRF-TOKEN";
    private static final String ACCESS_TOKEN_PATH = "/";
    private static final String REFRESH_TOKEN_PATH = "/hookflow-api/auth/refresh";

    public ResponseCookie createAccessTokenCookie(String token) {
        return ResponseCookie.from(ACCESS_TOKEN_COOKIE, token)
                .httpOnly(true)
                .secure(false)
                .path(ACCESS_TOKEN_PATH)
                .maxAge(ACCESS_TOKEN_MAX_AGE_SECONDS)
                .sameSite("Lax")
                .build();
    }

    public ResponseCookie createRefreshTokenCookie(String token) {
        return ResponseCookie.from(REFRESH_TOKEN_COOKIE, token)
                .httpOnly(true)
                .secure(false)
                .path(REFRESH_TOKEN_PATH)
                .maxAge(REFRESH_TOKEN_MAX_AGE_SECONDS)
                .sameSite("Lax")
                .build();
    }

    public ResponseCookie removeAccessTokenCookie(){
        return ResponseCookie.from(ACCESS_TOKEN_COOKIE, null)
                .httpOnly(true)
                .secure(false)
                .path(ACCESS_TOKEN_PATH)
                .maxAge(TOKEN_REMOVE)
                .sameSite("Lax")
                .build();
    }

    public ResponseCookie removeRefreshTokenCookie(){
        return ResponseCookie.from(REFRESH_TOKEN_COOKIE, null)
                .httpOnly(true)
                .secure(false)
                .path(REFRESH_TOKEN_PATH)
                .maxAge(TOKEN_REMOVE)
                .sameSite("Lax")
                .build();
    }

    public ResponseCookie removeCsrfTokenCookie(){
        return ResponseCookie.from(CSRF_TOKEN_COOKIE, null)
                .httpOnly(false)
                .secure(false)
                .path("/")
                .maxAge(TOKEN_REMOVE)
                .sameSite("Lax")
                .build();
    }
}
