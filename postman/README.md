# Driver App API Testes

## Ferramentas

- Postman

## Requisições

1. Authenticate App
2. Vehicle Allowed
3. Vehicle Login
4. Vehicle Login Force *(utilizado apenas durante investigação)*
5. Vehicle Logout
6. Driver Current Login *(validação do veículo logado)*
7. App Logout

## Configuração

Criar um novo **Environment** contendo:

- `baseUrl = qa-trix2.trixlog.com/`
- `customer = 101`
- `login =` *(preenchido automaticamente após autenticação)*

Para autenticação são necessários:

- Usuário
- Senha

Após a autenticação, as variáveis abaixo são armazenadas automaticamente para utilização nas requisições seguintes:

- `authorization`
- `customerId`
- `driverId`
- `vehicleId`
- `login`

> **Observação:** os endpoints **Vehicle Login**, **Vehicle Logout** e **Driver Current Login** exigem, além do `Authorization`, os seguintes headers:
>
> - `Customer = {{customer}}`
> - `Login = {{login}}`

## Fluxo recomendado

```text
Authenticate App
        ↓
Vehicle Allowed
        ↓
Vehicle Login
        ↓
Driver Current Login
        ↓
Vehicle Logout
        ↓
App Logout
```

## Dados armazenados automaticamente

No script da requisição **Authenticate App**, são armazenadas automaticamente todas as variáveis utilizadas nas etapas seguintes.

## Desafios encontrados

Durante o desenvolvimento dos testes foram identificados alguns comportamentos e regras de negócio que impactaram a automação:

- Usuários recém-criados não possuem veículos autorizados por padrão. Inicialmente foi necessário utilizar um condutor previamente cadastrado para validar o fluxo da API.
- Posteriormente foi identificado que os condutores somente podem realizar login em veículos pertencentes à mesma organização. Após a liberação das permissões no ambiente de QA, tornou-se possível visualizar os veículos autorizados para o usuário utilizado nos testes.
- Os endpoints **Vehicle Login**, **Vehicle Logout** e **Driver Current Login** exigem, além do `Authorization`, os headers `Customer` (valor fixo **101**) e `Login` (mesmo login utilizado na autenticação). Essa informação foi disponibilizada posteriormente pela equipe responsável durante a execução do desafio.
- O endpoint **Vehicle Login Force** foi utilizado inicialmente como alternativa por aparentar contornar o erro encontrado durante os testes. Posteriormente foi esclarecido que esse endpoint não faz parte do escopo do desafio e ignora algumas validações de negócio.

## Observações

- Após realizar o login em um veículo, recomenda-se executar obrigatoriamente o endpoint **Vehicle Logout** antes de realizar um novo **Vehicle Login**.
- O endpoint **Driver Current Login** pode ser utilizado para validar qual veículo está atualmente associado ao condutor após a autenticação no veículo.
- O endpoint **Vehicle Login Force** foi mantido na Collection apenas para fins de consulta e investigação, não fazendo parte do fluxo oficial solicitado no desafio.
- O acesso aos veículos disponíveis depende das permissões do usuário e da organização à qual o condutor pertence. Essa configuração foi ajustada no ambiente de QA durante o desenvolvimento dos testes.