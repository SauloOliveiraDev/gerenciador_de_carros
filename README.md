# Sistema de Gerenciamento de Carros  

Este projeto é um sistema de registro de carros desenvolvido utilizando Node.js, Express, EJS e MySQL.  

## 🛠️ Tecnologias Utilizadas  
- **Node.js** e **Express** para o backend  
- **MySQL** para armazenamento de dados  
- **EJS** para renderização de páginas  
- **Fetch API** para integração entre frontend e backend  
- **Codespaces** para ambiente de desenvolvimento  

## ✨ Funcionalidades  
- Registro, visualização, atualização e exclusão de carros (CRUD)  
- Integração frontend-backend para registro e consulta  
- Banco de dados MySQL configurado diretamente no Codespaces  

## 👥 Colaboração  
Este projeto foi desenvolvido em colaboração com Leonardo Santos Bacelar(https://github.com/LeonardoBCL) que foi responsável pelo Desenvolvimento do frontend e estilização das páginas 
Minhas principais contribuições foram:  
- Desenvolvimento do backend utilizando Node.js e Express  
- Configuração e integração do banco de dados MySQL  
- Implementação da conexão entre o backend e o frontend  
- Documentação do projeto  

Outros desenvolvedores contribuíram com a criação do frontend e a estilização das páginas.  

## 🚀 Como Executar  
1. Clone o repositório:
- git clone https://github.com/seuusuario/nome-do-projeto.git
2. Instale as dependências:  
- npm install
3. Ative o servidor MySql (o banco de dados se criara automaticamente ao iniciar o sistema, o código de criação do banco está no arquivo `src/database/criacao_db.sql`).
- Caso esteja executando o código no CodeSpace ou em um sistema Linux utilize o camando " sudo service mysql restart " no terminal para iniciar o servidor MySql.
- Caso seja em um sistema windowns pode utilizar softwares como o Xampp para iniciar o servidor MySql.
4. Execute o servidor:
- npm start
5. Acesse no navegador:  
- http://localhost:3000 


