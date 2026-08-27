package com.hookflow.api.domain.entities;

import java.util.UUID;

public class ApiKey {
    private UUID id;
    private UUID clientApplicationId;
    private String hashKey;
    private boolean active;

    private ApiKey(UUID id, UUID clientApplicationId, String hashKey, boolean active){
        this.id = id;
        setClientApplicationId(clientApplicationId);
        setHashKey(hashKey);
        setActive(active);
    }

    public static ApiKey create(UUID clientApplicationId, String hashKey){
        return new ApiKey(null, clientApplicationId, hashKey, true);
    }

    public static ApiKey restore(UUID id, UUID clientApplicationId, String hashKey, boolean active){
        return new ApiKey(id, clientApplicationId, hashKey, active);
    }

    public void remove(){
        setHashKey(this.hashKey + "-deleted");
        setActive(false);
    }

    public UUID getId() {
        return id;
    }

    public UUID getClientApplicationId() {
        return clientApplicationId;
    }

    private void setClientApplicationId(UUID clientApplicationId) {
        this.clientApplicationId = clientApplicationId;
    }

    public String getHashKey() {
        return hashKey;
    }

    private void setHashKey(String hashKey) {
        this.hashKey = hashKey;
    }

    public boolean isActive() {
        return active;
    }

    private void setActive(boolean active) {
        this.active = active;
    }
}
