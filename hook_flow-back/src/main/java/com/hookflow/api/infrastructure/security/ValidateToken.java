package com.hookflow.api.infrastructure.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;

public class ValidateToken {
    private final String secretKey;
    private final String issuer;

    public ValidateToken(String secretKey, String issuer){
        this.secretKey = secretKey;
        this.issuer = issuer;
    }

    public DecodedJWT execute(String token){
        Algorithm algorithm = Algorithm.HMAC256(secretKey);
        JWTVerifier verifier = JWT.require(algorithm)
                .withIssuer(issuer)
                .build();

        return verifier.verify(token);
    }
}
