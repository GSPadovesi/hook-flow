package com.hookflow.api.domain.entities;

import java.util.UUID;

public class Event {
    private UUID id;
    private UUID clientApplicationId;
    private String event;
    private String payload;

    private Event(UUID id, UUID clientApplicationId, String event, String payload){
        this.id = id;
        setClientApplicationId(clientApplicationId);
        setEvent(event);
        setPayload(payload);
    }

    public static Event create(UUID clientApplicationId, String event, String payload){
        return new Event(null, clientApplicationId, event, payload);
    }

    public static Event restore(UUID id, UUID clientApplicationId, String event, String payload){
        return new Event(id, clientApplicationId, event, payload);
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

    public String getEvent() {
        return event;
    }

    private void setEvent(String event) {
        this.event = event;
    }

    public String getPayload() {
        return payload;
    }

    private void setPayload(String payload) {
        this.payload = payload;
    }
}
