package com.hookflow.api.infrastructure.persistence.user;

import com.hookflow.api.domain.entities.User;

public class UserMapper {
    public UserEntity fromDomain(User user){
        return new UserEntity(
                user.getId(),
                user.getUsername(),
                user.getName(),
                user.getEmail(),
                user.getPassword(),
                user.getRole(),
                user.isActive()
        );
    }

    public User toDomain(UserEntity entity){
        return User.restore(
                entity.getId(),
                entity.getUsername(),
                entity.getName(),
                entity.getEmail(),
                entity.getPassword(),
                entity.getRole(),
                entity.isActive()
        );
    }
}
