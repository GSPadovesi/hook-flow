package com.hookflow.api.infrastructure.persistence.event;

import com.hookflow.api.domain.entities.Event;

public class EventMapper {
    public EventEntity fromDomain(Event event){
        return new EventEntity(
                event.getId(),
                event.getClientApplicationId(),
                event.getEvent(),
                event.getPayload()
        );
    }

    public Event toDomain(EventEntity event){
        return Event.restore(
                event.getId(),
                event.getClientApplicationId(),
                event.getEvent(),
                event.getPayload()
        );
    }
}
