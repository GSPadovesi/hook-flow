package com.hookflow.api.infrastructure.gateway;

import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.domain.entities.ApiKey;
import com.hookflow.api.infrastructure.persistence.apiKey.ApiKeyEntity;
import com.hookflow.api.infrastructure.persistence.apiKey.ApiKeyMapper;
import com.hookflow.api.infrastructure.persistence.apiKey.ApiKeyRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.HexFormat;
import java.util.List;
import java.util.UUID;

@Service
public class ApiKeyService implements ApiKeyGateway {
    private final ApiKeyRepository apiKeyRepository;
    private final ApiKeyMapper apiKeyMapper;
    private final SecureRandom secureRandom = new SecureRandom();
    private static final String ALGORITHM = "HmacSHA256";
    @Value("${hf.secret.key}")
    private String secret;

    public ApiKeyService(ApiKeyMapper apiKeyMapper, ApiKeyRepository apiKeyRepository){
        this.apiKeyMapper = apiKeyMapper;
        this.apiKeyRepository = apiKeyRepository;
    }

    @Transactional
    @Override
    public ApiKey save(ApiKey apiKey) {
        ApiKeyEntity entity = apiKeyMapper.fromDomain(apiKey);
        return apiKeyMapper.toDomain(apiKeyRepository.save(entity));
    }

    @Transactional
    @Override
    public String createKey() {

        byte[] randomBytes = new byte[32]; // 256 bits
        secureRandom.nextBytes(randomBytes);

        return Base64.getUrlEncoder().withoutPadding().encodeToString(randomBytes);
    }

    @Transactional
    @Override
    public String hashKey(String key) {
        try{
            Mac mac = Mac.getInstance(ALGORITHM);
            SecretKeySpec secretKeySpec = new SecretKeySpec(
                    secret.getBytes(StandardCharsets.UTF_8),
                    ALGORITHM
            );

            mac.init(secretKeySpec);

            byte[] hashBytes = mac.doFinal(
                    key.getBytes(StandardCharsets.UTF_8)
            );

            return HexFormat.of().formatHex(hashBytes);
        } catch (Exception e){
            throw new RuntimeException("Erro ao gerar hash da API Key", e);
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<ApiKey> findAllByClientApplicationIdIn(List<UUID> applicationsIds) {
        return apiKeyRepository.findAllByClientApplicationIdIn(applicationsIds)
                .stream()
                .map(apiKeyMapper::toDomain)
                .toList();
    }

    @Override
    public List<UUID> findAllByClientApplicationId(UUID applicationId) {
        return apiKeyRepository.findAllByClientApplicationId(applicationId)
                .stream()
                .toList();
    }

}
