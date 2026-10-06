# 🏦 Banco API Tests

Projeto de automação de testes de API desenvolvido com **Node.js**, **Mocha**, **Chai**, **Supertest**, **dotenv** e **Mochawesome**.

O objetivo deste projeto é automatizar testes de uma API bancária, validando principalmente os endpoints de **login** e **transferências**, incluindo cenários positivos e negativos.

---

## 📋 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração do ambiente](#-configuração-do-ambiente)
- [Arquivo .env](#-arquivo-env)
- [Fixtures](#-fixtures)
- [Helpers](#-helpers)
- [Testes automatizados](#-testes-automatizados)
- [Autenticação](#-autenticação)
- [Cenários de teste](#-cenários-de-teste)
- [Execução dos testes](#-execução-dos-testes)
- [Relatórios](#-relatórios)
- [Boas práticas utilizadas](#-boas-práticas-utilizadas)
- [Pontos de atenção](#-pontos-de-atenção)
- [Possíveis melhorias](#-possíveis-melhorias)
- [Aprendizados](#-aprendizados)
- [Autora](#-autora)

---

## 📌 Sobre o projeto

O **Banco API Tests** é um projeto de automação de testes de API desenvolvido para validar funcionalidades de uma API bancária.

A automação realiza requisições HTTP diretamente nos endpoints da API e verifica se os resultados obtidos estão de acordo com os comportamentos esperados.

Atualmente, a suíte contempla testes relacionados a:

- autenticação de usuário;
- obtenção de token;
- realização de transferências;
- transferência com valor permitido;
- transferência com valor abaixo do mínimo esperado;
- validação de códigos de status HTTP;
- validação de informações retornadas pela API.

O projeto também utiliza uma estrutura organizada em **fixtures**, **helpers** e **testes**, facilitando a manutenção e a reutilização do código.

---

## 🎯 Objetivos

Os principais objetivos deste projeto são:

- praticar automação de testes de API;
- desenvolver testes utilizando JavaScript;
- trabalhar com requisições HTTP;
- validar códigos de status HTTP;
- validar respostas da API;
- trabalhar com autenticação baseada em token;
- utilizar dados externos aos arquivos de teste;
- criar funções reutilizáveis;
- trabalhar com variáveis de ambiente;
- gerar relatórios automatizados;
- aplicar boas práticas de organização em projetos de QA.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Ambiente de execução do projeto |
| **JavaScript** | Linguagem utilizada na automação |
| **Mocha** | Framework para execução dos testes |
| **Chai** | Biblioteca de asserções |
| **Supertest** | Realização de requisições HTTP |
| **dotenv** | Gerenciamento de variáveis de ambiente |
| **Mochawesome** | Geração dos relatórios de testes |
| **JSON** | Armazenamento dos dados utilizados nos testes |
| **Git** | Controle de versão |
| **GitHub** | Hospedagem do código |

---

## 📁 Estrutura do projeto

```text
banco-api-tests/
│
├── fixtures/
│   ├── postLogin.json
│   └── postTransferencias.json
│
├── helpers/
│   └── autenticacao.js
│
├── test/
│   ├── login.test.js
│   └── transferencia.test.js
│
├── .env
├── .gitignore
├── package.json
└── package-lock.json
