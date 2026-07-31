package com.hookflow.api.domain.entities;

import com.hookflow.api.domain.enums.UserRole;

import java.util.UUID;
import java.util.regex.Pattern;

public class User {
    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$");
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
        if(username == null || username.isBlank()) throw new IllegalArgumentException("Nome de usuário é obrigatorio");
        if(username.length() < 3) throw new IllegalArgumentException("Nome invalido");
        if(name == null || name.isBlank()) throw new IllegalArgumentException("Nome é obrigatorio");
        if(email == null || email.isBlank()) throw new IllegalArgumentException("Email é obrigatorio");
        if(!EMAIL_PATTERN.matcher(email.trim().toLowerCase()).matches()) throw new IllegalArgumentException("Email invalido");
        if(password == null || password.isBlank()) throw new IllegalArgumentException("Senha é obrigatoria");

        return new User(null, username.trim(), name.trim(), email.trim().toLowerCase(), password, UserRole.CUSTOMER, true);
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
