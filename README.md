# gestor-clientes
Sistema Gerenciador de Clientes

Tecnologias utilizadas: Angular(com template Sakai do PrimeNG), Spring, Docker, Postgres


## Configurando o Banco de Dados (Docker)
Certifique-se de ter o Docker instalado em sua máquina.

Abra um terminal e navegue até a raiz do seu projeto onde está localizado o arquivo Docker Compose.

Execute o seguinte comando para criar e iniciar o banco de dados PostgreSQL (certifique-se de que a porta 5432 esteja livre):

docker-compose up -d

Execute o script sql contido no projeto para criar as tabelas necessárias

## Configurando o Aplicação Angular
Abra um terminal e navegue até a pasta do projeto Angular.

Execute o seguinte comando para instalar as dependências do Angular:
```
npm install
```

Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento do Angular:
```
ng serve
```
O aplicativo estará disponível em http://localhost:4200/.

## Configurando a Aplicação Spring
Abra a sua IDE

Importe o projeto Spring para sua IDE.

Certifique-se de que o container do banco de dados esteja up.

Execute a classe SgcApplication
