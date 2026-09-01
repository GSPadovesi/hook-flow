package com.hookflow.api.infrastructure.persistence.event;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "events")
public class EventEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "application_id", nullable = false)
    private UUID clientApplicationId;

    @Column(nullable = false)
    private String event;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String payload;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public EventEntity(){

    }

    public EventEntity(UUID id, UUID clientApplicationId, String event, String payload){
        this.id = id;
        this.clientApplicationId = clientApplicationId;
        this.event = event;
        this.payload = payload;
    }

    public UUID getId() {
        return id;
    }

    public UUID getClientApplicationId() {
        return clientApplicationId;
    }

    public String getEvent() {
        return event;
    }

    public String getPayload() {
        return payload;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
