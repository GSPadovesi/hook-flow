package com.hookflow.api.application.usecases.webHook;

import com.hookflow.api.application.command.page.PageCommand;
import com.hookflow.api.application.command.webHook.ResponseWebHookCommand;
import com.hookflow.api.application.command.webHook.SearchWebHookCommand;
import com.hookflow.api.application.exceptions.ClientApplicationNotFoundException;
import com.hookflow.api.application.gateways.ClientApplicationGateway;
import com.hookflow.api.application.gateways.WebHookGateway;
import com.hookflow.api.domain.entities.ClientApplication;
import com.hookflow.api.domain.entities.WebHook;

import java.util.List;
import java.util.UUID;

public class GetAllWebHookUseCase {
    private final ClientApplicationGateway clientApplicationGateway;
    private final WebHookGateway webHookGateway;

    public GetAllWebHookUseCase(ClientApplicationGateway clientApplicationGateway, WebHookGateway webHookGateway){
        this.clientApplicationGateway = clientApplicationGateway;
        this.webHookGateway = webHookGateway;
    }

    public PageCommand<ResponseWebHookCommand> getAll(SearchWebHookCommand command){
        if(command.applicationId() == null){
            List<UUID> applicationsIds = clientApplicationGateway.findAllClientApplication(command.ownerId())
                    .stream().map(ClientApplication::getId).toList();

            PageCommand<WebHook> webHooksPage = webHookGateway.findAllByClientApplicationIdIn(applicationsIds, command.page(), command.size());
            return new PageCommand<>(
                    webHooksPage.content()
                            .stream()
                            .map(webHook -> new ResponseWebHookCommand(
                                    webHook.getId(),
                                    webHook.getClientApplicationId(),
                                    webHook.getUrl(),
                                    webHook.isActive(),
                                    webHook.getEventCategories()
                            ))
                            .toList(),
                    webHooksPage.page(),
                    webHooksPage.size(),
                    webHooksPage.totalPages(),
                    webHooksPage.totalElements()
            );
        }

        boolean applicationBelongsToUser = clientApplicationGateway.existsByIdAndOwnerId(command.applicationId(), command.ownerId());

        if(!applicationBelongsToUser) throw new ClientApplicationNotFoundException("Aplicação não encontrada");

        PageCommand<WebHook> webHooksPage = webHookGateway.findAllWebHooksByClientApplicationId(
                command.applicationId(),
                command.page(),
                command.size()
        );

       return new PageCommand<>(
               webHooksPage.content()
                       .stream()
                       .map(webHook -> new ResponseWebHookCommand(
                               webHook.getId(),
                               webHook.getClientApplicationId(),
                               webHook.getUrl(),
                               webHook.isActive(),
                               webHook.getEventCategories()
                       ))
                       .toList(),
               webHooksPage.page(),
               webHooksPage.size(),
               webHooksPage.totalPages(),
               webHooksPage.totalElements()
       );
    }
}
