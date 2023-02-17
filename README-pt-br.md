##### **Read in english:**
[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/arthur-nepomuceno/pj26-devnology-back-end/blob/master/README.md)

<p align="center">
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4dd.svg" alt="FavLinks" style="width: 89px; height: 89px"/>
</p>

## <p align = "center">  - FavLinks - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/autor-Arthur Nepomuceno-093D04?style=flat-square" />
</p>

## Comece aqui



## Sumário
   - [Apresentação](#apresentação)
   - [Introdução](#introdução)
   - [Conceitos e Tecnologias](#conceitos-e-tecnologias)
   - [Rodando a aplicação](#rodando-a-aplicação)
   - [Rotas](#rotas)

***


## Apresentação
   Este projeto é uma API para armenamento de links. Objetivo é prover uma plataforma onde o usuário possa se cadastrar e então manter um acompanhamento dos seus links favoritos, que podem ser de todo e qualquer tipo.
   
***

## Introdução
   Este é um projeto desenvolvido em TypeScript. Os testes foram desenvolvidos com Jest e Supertest. O banco de dados foi desenvolvido com Prisma. Suas entidades são:
   - _users_: tabela de registro para os usuários do sistema. Cada pessoa deve se registrar antes de ter aceso as demais funcionalidades.
   - _links_: tabela que guarda as informações dos links registrados pelos usuários, contento título, endereço do link e sua descrição.
   
***

## Conceitos e Tecnologias
    - amazon web services
    - docker
    - docker-compose
    - TDD
    - testes unitários
    - testes de integração
    - jest
    - supertest
    - typeScript
    - nodeJs
    - nodemon
    - express
    - express-async-errors
    - cors
    - dotenv
    - postgreSQL
    - faker
    - jsonwebtoken

***

## Rodando a aplicação

### Com Docker

### Sem Docker
Este projeto foi inicializado com o Node Package Manager, então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/arthur-nepomuceno/pj26-devnology-back-end.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
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
GET /tests/disciplines
    - Rota para o usuário visualizar as provas separadas por disciplina.
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {}
    - query: {}
    - body: {}
    - response: [
    {
        "term": 2,
        "tests": [
            {
                "discipline": "JavaScript",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_1"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_2"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação,
                        "testName": "test_3"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "discipline": "Planejamento",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_4"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_5"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação",
                        "testName": "test_6"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    },
    {
        "term": 3,
        "tests": [
            {
                "discipline": "React",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_7"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_8"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação,
                        "testName": "test_9"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "discipline": "Autoconfiança",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_10"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_11"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação",
                        "testName": "test_12"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    }
]
```

```yml
GET /tests/teachers
    - Rota para o usuário visualizar as provas separadas por professor.
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {}
    - query: {}
    - body: {}
    - response: [
    {
        "teacher": Bruna Hamori,
        "tests": [
            {
                "term": "2",
                "disciplines": [
                    {
                        "discipline": "JavaScript",
                        "category": "Projeto",
                        "testName": "test_1",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "JavaScript",
                        "category": "Prática",
                        "testName": "test_2",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "JavaScript",
                        "category": "Recuperação,
                        "testName": "test_3",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "term": 3,
                "disciplines": [
                    {
                        "discipline": "React",
                        "category": "Projeto",
                        "testName": "test_4",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "React",
                        "category": "Prática",
                        "testName": "test_5",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "React",
                        "category": "Recuperação",
                        "testName": "test_6",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    },
    {
        "teacher": "Diego Pinho",
        "tests": [
            {
                "term": 1,
                "disciplines": [
                    {
                        "discipline": "Humildade",
                        "category": "Projeto",
                        "testName": "test_7",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Humildade",
                        "category": "Prática",
                        "testName": "test_8",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Humildade",
                        "category": "Recuperação,
                        "testName": "test_9",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "term": 3,
                "disciplines": [
                    {
                        "discipline": "Autoconfiança",
                        "category": "Projeto",
                        "testName": "test_10",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Autoconfiança",
                        "category": "Prática",
                        "testName": "test_11",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Autoconfiança",
                        "category": "Recuperação",
                        "testName": "test_12",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    }
]
```
###### [voltar para o sumário](#sumário)
