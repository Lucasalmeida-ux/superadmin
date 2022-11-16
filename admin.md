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










## Entregável

### FrontEnd
- Criar e configurar repositórios no github com os prjetos de front e back end(10h)
- Integração com antD no nextjs (16h)
- Tela inicial (apenas o botão de login) (10h)
    - Quando o usuário clicar no botão de login será redirecionado para a página de login do keycloak, ao se autenticar voltará para a página do dashboard 
- Integrar com nestjs (16h)
    - Criar um serviço que se comunica com a api do nestjs para trazer os dados da plataforma de sorteio
- dashboard (20h)
    A dashboard tera uma barra superior com o botão de logout e a listagem das plataformas de sorteio
    ao clicar em uma plataforma o usuário é redirecionado para uma página com dados da plataforma de sorteio


### BackEnd
Criar servidor keycloak e configurar realms, usuário do superadmin e permissão de ler os dados da plataforma de sorteio (16h)
#### Nestjs
- Criar verificação das permissoes 16h
- Criar conexão com o orquestrador a partir de login e senha (admin do orquestrador) (10h)
- Buscar as promoções que o usuário tem acesso no nest e devolver para o front (14h)


#### Orquestrador plataformadesorteio (16)
- Modifico o promotion/api/me para retornar todas as promotion ids que o usuário tem acesso 
- Listar várias promoções
    - /api/promotion
    - Recebe vários ids e retorna os dados das promoções