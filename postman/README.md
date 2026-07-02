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

## Configuração

Criar um novo Environment contendo:

- baseUrl = qa-trix2.trixlog.com/

Para autenticação são necessários:

- Usuário
- Senha

Após a autenticação, as variáveis abaixo são armazenadas automaticamente para utilização nas requisições seguintes:

- authorization
- customerId
- driverId
- vehicleId

## Desafios encontrados

Durante a execução dos testes foram identificados alguns comportamentos que podem indicar inconsistências na API:

- Usuários recém-cadastrados não possuem veículos disponíveis para autenticação, sendo necessário utilizar um usuário previamente configurado (BINO).
- A rota **Vehicle Login** retorna erro interno do servidor (HTTP 500) em todas as tentativas realizadas.
- A rota **Vehicle Login Force** executa corretamente apenas uma vez para cada combinação válida de IDs. Nas tentativas seguintes passa a retornar HTTP 500.
- A rota **Vehicle Logout** retorna HTTP 500 em todas as execuções realizadas.
- A documentação Swagger apresenta diversos parâmetros para a rota **Logout**, porém todos aparentam ser opcionais.
- Para o fluxo implementado foi utilizada a requisição **GET Logout**, que apresentou comportamento compatível com a documentação.
