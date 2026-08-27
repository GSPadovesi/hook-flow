package com.hookflow.api.domain.entities;

import java.util.UUID;

public class WebHook {
    private UUID id;
    private UUID clientApplicationId;
    private String url;
    boolean active;
}
