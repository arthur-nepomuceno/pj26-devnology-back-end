##### **Read in english:**
[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/arthur-nepomuceno/pj26-devnology-back-end/blob/master/README.md)

<p align="center">
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4dd.svg" alt="FavLinks" style="width: 89px; height: 89px"/>
</p>

## <p align = "center">  - FavLinks - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/autor-Arthur Nepomuceno-093D04?style=flat-square" />
</p>

## Sumário
   - [Apresentação](#apresentação)
   - [Introdução](#introdução)
   - [Conceitos e Tecnologias](#conceitos-e-tecnologias)
   - [Rodando a aplicação](#rodando-a-aplicação)
   - [Rotas](#rotas)

***


## Apresentação
   Este projeto é uma API para armazenamento de links. O objetivo é prover uma plataforma onde o usuário possa se cadastrar e então manter um acompanhamento dos seus links favoritos, que podem ser de todo e qualquer tipo. Após cadastrar-se, um usuário deve poder adicionar, visualizar, editar e excluir links.
   
***

## Introdução
   Este projeto é desenvolvido com TypeScript. Os testes foram desenvolvidos com Jest e Supertest. O banco de dados foi desenvolvido com Prisma. Suas entidades são:
   - _users_: tabela de registro para os usuários do sistema. Cada pessoa deve se registrar antes de ter aceso as demais funcionalidades.
   - _links_: tabela que guarda as informações dos links registrados pelos usuários, contento título, endereço do link e sua descrição.
   
***

## Conceitos e Tecnologias
    - amazon web services
         Utilizado para deploy deste back-end, acessível pelo endereço de IP público 54.209.15.185:80.
    
    - docker
    - docker-compose
         Utilizados na criação da imagem e containerização deste sistema.
    
    - TDD
         Test Driven Development. Conceito aplicado no desenvolvimento desta API, 
         escrevendo os casos dos testes antes do desenvolvimento do código.
    
    - testes unitários
    - testes de integração
    - jest
    - supertest
         Testes desenvolvidos com Jest e Supertest, 
         para testagem automatizada dos end-points e dos serviços desta aplicação.
         
    - faker
         Biblioteca utilizada para gerar dados aleatórios durante a execução dos testes.
    
    - typeScript
         Linguagem de programação, derivada do JavaScript, utilizada para o desenvolvimento desta API.
    
    - nodeJs
         Plataforma que permite a execução de códigos JavaScript fora dos navegadores da web.
    
    - nodemon
         Ferramenta que permite maior velocidade na renderização do projeto ao longo do seu desenvolvimento.
         
    - express
         Biblioteca de serviços a partir dos quais é possível transformar 
         a máquina local em um servidor para a execução do código.
         
    - express-async-errors
         Biblioteca utilizada para tratar e administrar os erros no processo de desenvolvimento e utilização desta API.
         
    - cors
         Biblioteca responsável por viabilizar as requisições feitas no endereço de funcionamento desta API.
    
    - dotenv
         Biblioteca responsável por viabilizar o uso das variáveis de ambiente neste projeto.
         
    - postgreSQL
         Banco de dados escolhido para esta aplicação.
         
    - prisma ORM
         Ferramenta que permite a criação e manipulação do banco de dados diretamente pelo editor de código.
         
    - jsonwebtoken
         Biblioteca utilizada para geração de tokens no processo de autenticação desta API. (login e acesso).

***

## Rodando a aplicação

### Com Docker
Para utilizar esta opção, você precisa garantir que possui tanto o Docker quanto o Docker Compose instalados e disponíveis para uso na sua máquina. Caso não possua, você pode acessar o site oficial do Docker e seguir as instruções para a instalação fornecidas na documentação, clicando [aqui](https://docs.docker.com/).

Uma vez que você tenha essas ferramentas instaladas, faça o clone desse repositório na sua máquina:

```
git clone https://github.com/arthur-nepomuceno/pj26-devnology-back-end.git
```

Depois, dentro da pasta, rode o seguinte comando para inicializar a aplicação.

```
docker-compose up -d
```
Se tudo derto, você receberá uma mensagem final do tipo:

```
Starting devnology-docker ... done
```
Deste ponto em diante, você pode utilizar esta API através do endereço de IP da sua máquina local, na porta 5000. Por exemplo:

```
localhost:5000/signup
```

### Sem Docker
Este projeto foi inicializado com o Node Package Manager, então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua máquina:

```
git clone https://github.com/arthur-nepomuceno/pj26-devnology-back-end.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependências.

```
npm install
```

Finalizado o processo, é só inicializar o servidor.
```
npm run dev
```
###### [voltar para o sumário](#sumário)
***

## Rotas

```yml
POST /signup
    - Rota para criar um novo usuário.
    - headers: {}
    - params: {}
    - query: {}
    - body: {
        "email": "new_user@email.com",
        "password": "my-secret-password",
        "confirm": "my-secret-password"    
    }
    - response: {
        "id": "1",
        "email": "new_user@email.com"
    }
```

```yml
POST /login
    - Rota para o usuário acessar sua conta.
    - headers: {}
    - params: {}
    - query: {}
    - body: {
        "email": "new_user@email.com",
        "password": "my-secret-password"
    }
    - response: {
        token: "token-created-with-jsonwebtoken"
    }
```

```yml
POST /insertlink
    - Rota para o usuário adicionar um novo link ao seu cadastro.
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {}
    - query: {}
    - body: {
        "title": "my_link_title",
        "url": "http://my_link_address.com",
        "description": "my link description" 
    }
    - response: 'Your link was added successfully.'
```

```yml
GET /getlinks
    - Rota para o usuário visualizar todos os links que já registrou.
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {}
    - query: {}
    - body: {}
    - response: [
       {
         "id": 1,
         "userId": 1,
         "url": "my_link_title",
         "title": "http://my_link_address.com",
         "description": "my link description"
       }
     ]
```

```yml
POST /edit/:id
    - Rota para o usuário editar um de seus links.   
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {
         id: 1
    }
    - query: {}
    - body: {
        "url": "https://this-is-the-new-link.com/",
        "title": "This is the new title",
        "description": "This is the new description."
    }
    - response: {
        "id": 1,
        "userId": 1,
        "url": "https://this-is-the-new-link.com/",
        "title": "This is the new title",
        "description": "This is the new description."
    }
```

```yml
DELETE /delete/:id
    - Rota para o usuário deletar um de seus links.
        - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {
         id: 1
    }
    - query: {}
    - body: {}
    - response: 'Link deleted.'
```

###### [voltar para o sumário](#sumário)
