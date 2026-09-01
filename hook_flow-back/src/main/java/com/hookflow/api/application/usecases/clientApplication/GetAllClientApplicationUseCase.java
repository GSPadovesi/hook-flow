package com.hookflow.api.application.usecases.clientApplication;

import com.hookflow.api.application.command.apiKey.ResponseApiKeyCommand;
import com.hookflow.api.application.command.apiKey.ResponseApiKeySummaryCommand;
import com.hookflow.api.application.command.clientApplication.ResponseClientApplicationCommand;
import com.hookflow.api.application.command.clientApplication.SearchClientApplicationCommand;
import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.application.exceptions.ClientApplicationNotFoundException;
import com.hookflow.api.application.gateways.ApiKeyGateway;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.domain.entities.ApiKey;
import com.hookflow.api.domain.entities.ClientApplication;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

public class GetAllClientApplicationUseCase {
    private final ClientApplicationGateway clientApplicationGateway;
    private final ApiKeyGateway apiKeyGateway;

    public GetAllClientApplicationUseCase(ClientApplicationGateway clientApplicationGateway, ApiKeyGateway apiKeyGateway){
        this.clientApplicationGateway = clientApplicationGateway;
        this.apiKeyGateway = apiKeyGateway;
    }

    public PageCommand<ResponseClientApplicationCommand> execute(SearchClientApplicationCommand command){
        PageCommand<ClientApplication> applicationsPage = clientApplicationGateway.findAllClientApplication(command.page(), command.size(), command.ownerId());
        List<ClientApplication> applications = applicationsPage.content();

        if(applications.isEmpty()) new ClientApplicationNotFoundException("Nenhuma applicacao encontrada");

        List<UUID> applicationsIds = applications
                .stream()
                .map(ClientApplication::getId)
                .toList();

        List<ApiKey> keys = apiKeyGateway.findAllByClientApplicationIdIn(applicationsIds);

        Map<UUID, List<ApiKey>> keysByApplicationId = keys.stream()
                .collect(Collectors.groupingBy(ApiKey::getClientApplicationId));

        return new PageCommand<>(
                applications
                        .stream()
                        .map(application -> new ResponseClientApplicationCommand(
                                application.getId(),
                                application.getOwnerId(),
                                application.getName(),
                                application.getDescription(),
                                application.isActive(),
                                keysByApplicationId.getOrDefault(application.getId(), List.of())
                                        .stream()
                                        .map(key -> new ResponseApiKeySummaryCommand(
                                                key.getId(),
                                                key.isActive()
                                        ))
                                        .toList()
                                ))
                        .toList(),
                applicationsPage.page(),
                applicationsPage.size(),
                applicationsPage.totalPages(),
                applicationsPage.totalElements()
        );
    }
}
