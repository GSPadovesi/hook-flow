package com.hookflow.api.infrastructure.persistence.webHook;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "web_hooks")
public class WebHookEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(nullable = false, updatable = false)
    private UUID id;

    @Column(name = "application_id", nullable = false)
    private UUID clientApplicationId;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private boolean active;

    @ElementCollection
    @CollectionTable(name = "webhook_events", joinColumns = @JoinColumn(name = "webhook_id"))
    @Column(name = "event", nullable = false)
    private List<String> eventCategories;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public WebHookEntity(){}

    public WebHookEntity(UUID id, UUID clientApplicationId, String url, boolean active, List<String> eventCategories){
        this.id = id;
        this.clientApplicationId = clientApplicationId;
        this.url = url;
        this.active = active;
        this.eventCategories = eventCategories;
    }

    public UUID getId() {
        return id;
    }

    public UUID getClientApplicationId() {
        return clientApplicationId;
    }

    public String getUrl() {
        return url;
    }

    public boolean isActive() {
        return active;
    }

    public List<String> getEventCategories() {
        return eventCategories;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
