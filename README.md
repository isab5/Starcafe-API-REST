## 👩‍💻 Atividade StarCafé - Back-end

#### Está é uma atividade desenvolvido no curso técnico de desenvolvimento de sistemas no SENAI Valinhos na matéria de Back-end, com o objetivo de desenvolver um web service de menu e pedidos de uma cafeteria.

## 💻 Descrição da Atividade

#### A Atividade StarCafé serve para aprimorar nossos conhecimentos na disciplina de Back-end, com um foco total no desenvolvimento de softwares, estruturação e código limpo.

## 🚀 Tecnologias Utilizadas

#### <li> JavaScript;
#### <li> Node.js;
#### <li> JSON;
#### <li> Dependências que auxiliam no desenvolvimento: uuid (biblioteca), express, cors e nodemon.

## 📄 Documentação:

### 📌 Requisições:

### GET /menu

HTTP 1.1 200 OK

HTTP ERROR 404 Not Found

Host: http://localhost:3000

Content-Type: application/json

Location: /api/menu

X-Powered-By: Express

#### Corpo da Requisição:

    {
        "name": "Coxinha",
        "price": "R$8,00",
        "type": "Salgado Frito"
    }

### POST /order

HTTP 1.1 201 Created

HTTP ERROR 400 Bad Request

Host: http://localhost:3000

Content-Type: application/json

Location: /api/order

X-Powered-By: Express

#### Corpo da Requisição:

    {
        "name": "João",
        "item": "Café e Empada",
        "status": "Preparando"
    }

### GET /order

HTTP 1.1 200 OK

HTTP ERROR 404 Not Found

Host: http://localhost:3000

Content-Type: application/json

Location: /api/order/:id

X-Powered-By: Express

#### Corpo da Requisição:

    {
        "id": "310f68d2-9cbd-4ec3-a524-3e2b8926bf81",
        "name": "João",
        "item": "Café e Empada",
        "status": "Preparando"
    }

### DELETE /order

HTTP 1.1 200 OK

HTTP ERROR 403 Forbidden

Host: http://localhost:3000

Content-Type: application/json

Location: /api/order/:id

X-Powered-By: Express

#### Corpo da Requisição:

    {
        "message": "Pedido cancelado com sucesso!"
    }