package com.hookflow.api.infrastructure.persistence.apiKey;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "api_keys")
public class ApiKeyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(nullable = false, updatable = false)
    private UUID id;
    @Column(name = "application_id", nullable = false)
    private UUID clientApplicationId;
    @Column(nullable = false)
    private String hashKey;
    @Column(nullable = false)
    private boolean active;
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public ApiKeyEntity(){

    }

    public ApiKeyEntity(UUID id, UUID clientApplicationId, String hashKey, boolean active){
        this.id = id;
        this.clientApplicationId = clientApplicationId;
        this.hashKey = hashKey;
        this.active = active;
    }

    public UUID getId() {
        return id;
    }

    public UUID getClientApplicationId() {
        return clientApplicationId;
    }

    public String getHashKey() {
        return hashKey;
    }

    public boolean isActive() {
        return active;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
