# Sistema de Gerenciamento de Carros

Este projeto é um sistema de Gerenciamento de carros desenvolvido utilizando Node.js, Express, EJS e MySQL. Tendo como principal objetivo utilizar o CRUD.

## 🛠️ Tecnologias Utilizadas
- Node.js e Express para o backend
- MySQL para armazenamento de dados
- EJS para renderização de páginas
- Fetch API para integração entre frontend e backend
- Codespaces para ambiente de desenvolvimento

## ✨ Funcionalidades
- Registro, visualização, atualização e exclusão de carros (CRUD)
- Integração frontend-backend para registro e consulta
- Banco de dados MySQL configurado automaticamente no Codespaces

## 👥 Colaboração
Este projeto foi desenvolvido em colaboração com [Leonardo Santos Bacelar](https://github.com/LeonardoBCL), responsável pelo desenvolvimento do frontend e estilização das páginas.

Minhas principais contribuições foram:
- Desenvolvimento do backend utilizando Node.js e Express
- Configuração e integração do banco de dados MySQL
- Implementação da conexão entre o backend e o frontend
- Documentação do projeto

## 🚀 Como Executar

1. Clone o repositório ou execute o projeto pelo CodeSpace:
- Código para clonagem do repositório:
```
git clone https://github.com/SauloOliveiraDev/gerenciador_de_carros.git
```

2. Instale as dependências:

```
npm install
```

3. Ative o servidor MySQL:
- No Codespaces ou em sistemas Linux:
```
sudo service mysql restart
```
- Em sistemas Windows: utilize softwares como XAMPP para iniciar o servidor MySQL.

4. O banco de dados será criado automaticamente ao iniciar o sistema. O código de criação do banco está localizado no arquivo:

```
src/database/criacao_db.sql
```

5. Execute o servidor:

```
npm start
```

6. Acesse o sistema no navegador:

```
http://localhost:3000
```
