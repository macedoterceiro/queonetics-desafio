# Driver App API Testes

## Ferramentas

- Postman

## Requisições

1. Authenticate App
2. Vehicle Allowed
3. Vehicle Login
3.1. Vehicle Login Force *(utilizado apenas durante investigação)*
4. Vehicle Logout
5. App Logout

## Configuração

Criar um novo **Environment** contendo:

- `baseUrl = qa-trix2.trixlog.com/`
- `customerId = 101` *(foi observado que o usuário criado recebeu **customer = 101** internamente, então esse campo poderia ser preenchido automaticamente após autenticação)*
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
- Os endpoints **Vehicle Login** e **Vehicle Logout** exigem, além do `Authorization`, os headers `Customer` (valor fixo **101**) e `Login` (mesmo login utilizado na autenticação). Essa informação foi disponibilizada posteriormente pela equipe responsável durante a execução do desafio.
- O endpoint **Vehicle Login Force** foi utilizado inicialmente como alternativa por aparentar contornar o erro encontrado durante os testes. Posteriormente foi esclarecido que esse endpoint não faz parte do escopo do desafio e ignora algumas validações de negócio.
- A collection **Verificações do servidor** foram utilizadas para investigação da possivel causa do erro nos endpoints de **Vehicle Login** e **Vehicle Logout**

## Observações

- Após realizar o login em um veículo, recomenda-se executar obrigatoriamente o endpoint **Vehicle Logout** antes de realizar um novo **Vehicle Login**.
- O acesso aos veículos disponíveis depende das permissões do usuário e da organização à qual o condutor pertence. Essa configuração foi ajustada no ambiente de QA durante o desenvolvimento dos testes.
- O header `Customer` atualmente recebe do usuário criado o valor **101**, não sendo necessário fixá-lo.
- A collection **Verificações do servidor** foi adicionada ao projeto como evidencia de uso, não sendo necessário para validação do fluxo solicitado.
