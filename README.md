Lista de Tarefas Simples com Node.js e MongoDB
Este é um projeto simples de lista de tarefas desenvolvido com Node.js e MongoDB para aprimorar habilidades no desenvolvimento backend. A aplicação permite que os usuários criem, editem e excluam tarefas, além de associá-las a tags específicas. O projeto também inclui autenticação de usuários.

Funcionalidades
Adicionar, editar e excluir tarefas.
Associar tags a cada tarefa.
Autenticação de usuários para proteger as informações da conta.
Tecnologias Utilizadas
Node.js: Backend JavaScript.
Express: Framework para construção de aplicativos Node.js.
MongoDB: Banco de dados NoSQL para armazenamento de dados.
Mongoose: ODM (Object Data Modeling) para MongoDB e Node.js.
Bcrypt: Biblioteca para criptografia de senhas.
JSON Web Tokens (JWT): Para autenticação e geração de tokens.
Insomnia: Ferramenta para testar as APIs RESTful.
Próximas Etapas
Melhorar a tipagem do código para uma melhor escalabilidade e manutenção.
Implementar a parte do frontend para proporcionar uma experiência de usuário mais interativa.
Adicionar mais funcionalidades baseadas no feedback dos usuários.
Como Usar
Clone o repositório:

sh
Copy code
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências:

sh
Copy code
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes informações:

env
Copy code
MONGODB_URI=sua-url-do-mongodb
JWT_SECRET=sua-chave-secreta-para-jwt
Execute o servidor:

sh
Copy code
npm start
A aplicação estará disponível em http://localhost:3000.

Sinta-se à vontade para contribuir, abrir problemas ou fornecer feedback! Esperamos que este projeto seja útil para você. Happy coding! 🚀
