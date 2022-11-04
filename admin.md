# multi-admin
Sistema para gerenciar serviços


## Back-end
- Tecnologia: Nest.js

### autenticaçào
- Controlar autenticação dos usuários aos sistemas.
- via login e senha
- possue dois níveis de acesso
    - admin
    - client


#### Alternavitas open source
Nome      |Stars   |lang   |github
----------| -------|-----------|--------
Keycloak  | 13.9k  | java      |[keycloak](https://github.com/keycloak/keycloak)
authentik | 2.5k   | Python    |[authentik](https://github.com/goauthentik/authentik)
OIP       | 536    | java      |[OpenIdentityPlatform](https://github.com/OpenIdentityPlatform)
Gluu      | 517    | Python    |[gluu-docker](https://github.com/GluuFederation/cloud-native-edition)
Evolveum  | 279    | java      |[midpoint](https://github.com/Evolveum/midpoint)
syncope   | 182    | java      |[syncope](https://github.com/apache/syncope)
FusionAuth| 152    | java      |[fusionauth](https://github.com/FusionAuth/fusionauth-containers)
Next-auth | 12k    | javascript|[next-auth](https://github.com/nextauthjs/next-auth)

#### Outras alternativas

Nome      | Stars  |lang         |Github
----------|--------|-------------|--------
Auth0     | web    | web         |[Auth0](https://github.com/auth0/)

### Usuários
    - Admin
        - Gerenciar usuários
    - client
        - ver e acessar serviços
O código de acesso é enviado/solicitado
### Email
- Enviar código de acesso ao realizar login
### rotas
- GET /services/
        - /services/{service_name}/ 
            - GET /services/sorteios/
            - GET/services/sorteios/1
            - GET/services/sorteios/1


## Front-end
- Tecnologia: Nextjs
- Pages
    - '/Login'
    - '/logincode'
    - '/register'
    - '/register'
    - '/recovery'
    - '/admin/users/'
        - '/admin/users/1'
        - '/admin/users/add'
    - /services/ 
        - /services/{service_name}/ 
            - /services/sorteios/
            - /services/sorteios/1


## Multitenancy
A multilocação de software é uma arquitetura de software na qual uma única instância de software é executada em um servidor e atende a vários inquilinos. Os sistemas projetados dessa maneira são "compartilhados".