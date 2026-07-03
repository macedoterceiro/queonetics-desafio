# Frontend Web Testes

## Ferramentas

- Cypress
- JavaScript
- Fixtures
- GitHub Actions Ready

## Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Node.js
- npm

---

## Funcionalidades

### Página de Condutores

- Login
- Acesso à Sidebar
- Pesquisa
- Filtros
- Exportação
- Cadastro Básico
- Cadastro Completo
- Edição Rápida
- Edição Completa
- Exclusão

---

## Estrutura

O projeto foi organizado utilizando o padrão **Page Object Model (POM)** para separar responsabilidades e facilitar a manutenção.

```text
cypress/
├── e2e/
│   ├── driver/
│   │   ├── driver-list.cy.js
│   │   ├── driver-create.cy.js
│   │   ├── driver-update-delete.cy.js
│   │   └── driver-assertions.cy.js
│   │
│   ├── login.cy.js
│   └── sidebar.cy.js
│
├── fixtures/
│   └── driver.json
│
├── pages/
│   ├── LoginPage.js
│   ├── SidebarPage.js
│   │
│   └── driver/
│       ├── DriverPage.js
│       ├── DriverGrid.js
│       ├── DriverFilter.js
│       ├── DriverForm.js
│       ├── DriverFormFields.js
│       ├── DriverFullEdit.js
│       ├── DriverPageAssertions.js
│       ├── DriverCredentialModal.js
│       └── DriverQuickEdit.js
│
└── support/
```

---

## Organização dos testes

Os cenários foram divididos conforme a funcionalidade testada.

### Login

Responsável pela autenticação do usuário.

- Login

### Sidebar

Responsável pela navegação principal da aplicação.

- Acesso ao menu lateral
- Navegação entre módulos

### Driver Assertions

Responsável pelas validações da página.

- Carregamento da tela
- Colunas da tabela
- Botões disponíveis

### Driver List

Responsável pelas funcionalidades da listagem.

- Pesquisa
- Filtros
- Exportação

### Driver Create

Responsável pelo cadastro.

- Cadastro obrigatório
- Cadastro completo

### Driver Update and Delete

Responsável pelas alterações.

- Edição rápida
- Edição completa
- Exclusão

---

## Dados de teste

Os dados utilizados durante os testes estão centralizados na fixture:

```text
fixtures/driver.json
```

Dessa forma é possível alterar usuários e cenários sem necessidade de modificar o código dos testes.

---

## Execução

### Abrir o Cypress

```powershell
npx cypress open
```

---

### Executar todos os testes

```powershell
npx cypress run
```

---

### Executar um teste específico

```powershell
npx cypress run --spec cypress/e2e/login.cy.js
```

---

## Desafios encontrados

Durante o desenvolvimento dos testes foram encontrados alguns comportamentos que exigiram adaptações na automação:

- O botão de ações da tabela somente fica visível após o scroll horizontal da grid.
- A edição completa realiza requisições assíncronas para carregar os dados do condutor, sendo necessário aguardar o retorno antes de iniciar o preenchimento.
- Alguns componentes atualizam o DOM durante a digitação, ocasionando perda da referência do elemento (*Detached DOM*). Os métodos de preenchimento precisaram ser ajustados para realizar novas buscas antes de cada interação.
- A criação do condutor e a criação da credencial utilizam requisições distintas, sendo necessário aguardar o encerramento do modal antes de prosseguir com o cadastro.
- Os testes foram separados por responsabilidade para evitar dependência entre criação, edição e exclusão do mesmo registro.

---

## Refatoração para Page Objects

O desenvolvimento foi iniciado priorizando a implementação das funcionalidades solicitadas pelo desafio.

Após a conclusão dos fluxos principais foi realizada uma refatoração completa para adequação ao padrão **Page Object Model (POM)**.

Essa abordagem permitiu validar inicialmente todas as regras de negócio e, posteriormente, reorganizar o código em componentes menores e reutilizáveis, reduzindo duplicações, melhorando a legibilidade e facilitando futuras manutenções sem alterar o comportamento dos testes.

---

## Observações

- Existe um atraso de atualização dos dados após operações de criação, edição e exclusão de registros. Em alguns cenários foi necessário realizar logout e novo login para que as alterações fossem refletidas na interface.
- Segundo informações recebidas durante o desenvolvimento, esse comportamento está relacionado ao processo de indexação do Elastic Search utilizado pelo ambiente de QA.
- O projeto foi estruturado para utilização em pipelines de integração contínua, estando preparado para execução em ambientes automatizados via GitHub Actions.