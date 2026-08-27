package com.hookflow.api.domain.entities;

import java.util.UUID;

public class ClientApplication {
    private UUID id;
    private UUID ownerId;
    private String name;
    private String description;
    private boolean active;

    private ClientApplication(UUID id, UUID ownerId, String name, String description, boolean active){
        this.id = id;
        setOwnerId(ownerId);
        setName(name);
        setDescription(description);
        setActive(active);
    }

    public static ClientApplication create(UUID ownerId, String name, String description){
        if(ownerId == null) throw new IllegalArgumentException("Id de usuário é obrigatorio");
        if(name == null || name.isBlank()) throw new IllegalArgumentException("Nome é obrigatorio");

        String newDescription = description == null || description.isBlank()
                ? "Sem descrição"
                : description.trim();

        return new ClientApplication(null, ownerId, name.trim(), newDescription, true);
    }

    public static ClientApplication restore(UUID id, UUID ownerId, String name, String description, boolean active){
        return new ClientApplication(id, ownerId, name, description, active);
    }

    public void remove(){
        setName(this.name + "-deleted");
        setActive(false);
    }

    public void updateDetails(String name, String description){
        if(name.trim() != null) setName(name);
        if(description.trim() != null) setDescription(description);
    }

    public UUID getId(){
        return id;
    }

    public UUID getOwnerId() {
        return ownerId;
    }

    private void setOwnerId(UUID ownerId) {
        this.ownerId = ownerId;
    }

    public String getName() {
        return name;
    }

    private void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    private void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return active;
    }

    private void setActive(boolean active) {
        this.active = active;
    }
}
