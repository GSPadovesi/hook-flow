package com.hookflow.api.domain.entities;

import java.util.List;
import java.util.UUID;

public class WebHook {
    private UUID id;
    private UUID clientApplicationId;
    private String url;
    boolean active;
    List<String> eventCategories;

    private WebHook(UUID id, UUID clientApplicationId, String url, boolean active, List<String> eventCategories){
        this.id = id;
        setClientApplicationId(clientApplicationId);
        setUrl(url);
        setActive(active);
        setEventCategories(eventCategories);
    }

    public static WebHook create(UUID clientApplicationId, String url){
        return new WebHook(null, clientApplicationId, url, true, List.of());
    }

    public static WebHook restore(UUID id, UUID clientApplicationId, String url, boolean active, List<String> eventCategories){
        return new WebHook(id, clientApplicationId, url, active, eventCategories);
    }

    public UUID getId(){
        return id;
    }

    public UUID getClientApplicationId() {
        return clientApplicationId;
    }

    private void setClientApplicationId(UUID clientApplicationId) {
        this.clientApplicationId = clientApplicationId;
    }

    public String getUrl() {
        return url;
    }

    private void setUrl(String url) {
        this.url = url;
    }

    public boolean isActive() {
        return active;
    }

    private void setActive(boolean active) {
        this.active = active;
    }

    public List<String> getEventCategories() {
        return eventCategories;
    }

    private void setEventCategories(List<String> eventCategories) {
        this.eventCategories = eventCategories;
    }
}
