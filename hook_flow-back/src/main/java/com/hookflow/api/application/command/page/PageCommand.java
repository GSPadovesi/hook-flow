package com.hookflow.api.application.command.page;

import java.util.List;

public record PageCommand<T>(
        List<T> content,
        int page,
        int size,
        int totalPages,
        long totalElements
) {
}
