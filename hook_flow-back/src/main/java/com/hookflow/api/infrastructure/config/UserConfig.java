package com.hookflow.api.infrastructure.config;

import com.hookflow.api.infrastructure.persistence.user.UserMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    @Bean
    public UserMapper userMapper(){
        return new UserMapper();
    }
}
