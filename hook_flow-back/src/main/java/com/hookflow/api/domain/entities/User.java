package com.hookflow.api.domain.entities;

import com.hookflow.api.domain.enums.UserRole;

import java.util.UUID;

public class User {
    private UUID id;
    private String username;
    private String name;
    private String email;
    private String password;
    private UserRole role;
    private boolean active;

    private User(UUID id, String username, String name, String email, String password, UserRole role, boolean active){
        this.id = id;
        setUsername(username);
        setName(name);
        setEmail(email);
        setPassword(password);
        setRole(role);
        this.active = active;
    }

    public static User create(String username, String name, String email, String password){
        return new User(null, username, name, email, password, UserRole.CUSTOMER, true);
    }

    public static User restore(UUID id, String username, String name, String email, String password, UserRole role, boolean active){
        return new User(id, username, name, email, password, role, active);
    }

    public UUID getId(){
        return id;
    }

    public String getPassword() {
        return password;
    }

    private void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    private void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    private void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    private void setUsername(String username) {
        this.username = username;
    }

    public UserRole getRole() {
        return role;
    }

    private void setRole(UserRole role) {
        this.role = role;
    }

    public boolean isActive() {
        return active;
    }

    private void setActive(boolean active) {
        this.active = active;
    }
}
