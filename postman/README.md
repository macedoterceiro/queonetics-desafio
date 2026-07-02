# Driver App API Testes

## Ferramentas

- Postman

## Requisições

1. Authenticate App
2. Vehicle Allowed
3. Vehicle Login
4. Vehicle Login Force
5. Vehicle Logout
6. App Logout

## Variaveis

Criar um novo environment com:

- Variable = baseUrl
- Value = qa-trix2.trixlog.com/

Para autenticação é necessário:

- Usuário
- Senha

Após a autenticação o sistema armazena automaticamente os parâmetros da requisição seguinte, tais como:

- authorization
- customerId
- driverId
- vehicleId

## Desafios

- Novos usuários cadastrados na aplicação não tem veículos disponíveis, necessário utilizar um usuário cadastrado previamente (bino);
- A rota "Vehicle Login" atualmente retorna erro no servidor (500) em todos os casos, está salva para questionamentos posteriores;
- A rota "Vehicle Login Force" atualmente funciona uma vez para cada Id válido, após isso retorna erro do servidor (500);
- A rota "Vehicle Logout" atualmente retorna erro no servidor (500) em todos os casos, o que limita o uso da rota "Login Force";
- A rota "Logout" embora tenha um grande numero de parâmetros no swagger, parecem todos opcionais;
- Para o fluxo atual a requisição GET para "Logout" foi utilizada.