# Database Constraints

Constraints executadas manualmente no PostgreSQL via pgAdmin.

## `client_applications.owner_id` -> `users.id`

Vincula cada client application ao usuario dono da aplicacao.

```sql
ALTER TABLE client_applications
ADD CONSTRAINT fk_client_applications_owner
FOREIGN KEY (owner_id)
REFERENCES users(id);
```

## `api_keys.application_id` -> `client_applications.id`

Vincula cada API key a uma client application.

```sql
ALTER TABLE api_keys
ADD CONSTRAINT fk_api_keys_client_application
FOREIGN KEY (application_id)
REFERENCES client_applications(id);
```
