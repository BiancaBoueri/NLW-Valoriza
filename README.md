# NLW-Valoriza
Curso Backend - Nodejs

## Descrição

Sistema para gerenciamento de elogios entre pessoas trabalhando em uma mesma equipe ou empresa. O backend foi desenvolvido em Typescript utilizando Express.Js com banco de dados SQLite, juntamente com  o Typeorm. Foi implementado CRUD de tags, elogios e usuários, no qual a autenticação foi feita com JWT. O projeto foi feito com foco em uma arquitetura simples e organizada e com clareza de código.

## Regras

=> Cadastro de usuário

- Não é permitido cadatrar mais de um usuário com o mesmo email
- Não é permitido cadastrar usúario sem email

=> Cadastro de TAG

- Não é permitido cadastrar mais de uma tag com o mesmo nome
- Não é permitido cadastrar tag sem nome
- Não é permitido o cadastro por usuários que não sejam administradores

=> Cadastro de elogios

- Não é permitido um usuário cadastrar um elogio para si
- Não é permitido cadastrar elogios para usuários inválidos
- O usuário precisa estar autenticado na aplicação 

## Acrescentar no futuro

- Serviço para enviar uma notificação por email informando que o usuário recebeu um elogio
- Colocar em produção
- Frontend (biblioteca cors)
- Melhorar a arquitetura do código
- Criar classe de erros customizáveis

