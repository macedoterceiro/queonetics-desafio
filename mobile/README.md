# Mobile App Testes

## Ferramentas

- Appium
- WebdriverIO (WDIO)
- Android Studio
- Appium Inspector
- Allure Report

## Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Node.js
- Android Studio
- Android SDK
- Java JDK
- Appium
- Appium Inspector (opcional, para inspeção dos elementos)

Também é necessário possuir um dispositivo Android físico ou um emulador em execução. (Para o projeto foi utilizado emulador Android)

---

## Funcionalidades

### Fluxo de Compra

- Login
- Navegação pelo Menu Lateral
- Seleção de Produtos
- Configuração de Cor
- Adição ao Carrinho
- Validação do Carrinho
- Alteração de Quantidade
- Remoção de Produto
- Checkout
- Cadastro de Dados de Entrega
- Cadastro de Pagamento
- Revisão do Pedido
- Finalização da Compra
- Validação da Compra
- Logout

---

## Estrutura

O projeto foi organizado utilizando o padrão **Page Object Model (POM)** para separar os elementos das regras de negócio, facilitando a manutenção e reutilização dos componentes.

```text
mobile/
├── app/
│   └── Android-MyDemoAppRN.1.3.0.build-244.apk
│
├── data/
│   ├── users.json
│   ├── products.json
│   └── checkout.json
│
├── objects/
│   ├── BaseScreen.js
│   ├── LoginScreen.js
│   ├── MenuScreen.js
│   ├── ProductScreen.js
│   ├── CartScreen.js
│   └── CheckoutScreen.js
│
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── MenuPage.js
│   ├── ProductsPage.js
│   ├── ProductDetailsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── specs/
│   ├── login.spec.js
│   └── purchase-flow.spec.js
│
├── wdio.conf.js
└── README.md
```

---

## Organização dos testes

### Login

Responsável pela autenticação do usuário. (Descartado após implementação do fluxo de compra)

- Acesso ao menu lateral
- Navegação até Login
- Preenchimento das credenciais
- Validação do login

### Purchase Flow

Responsável pela validação completa do fluxo de compra.

- Login
- Seleção de dois produtos
- Configuração dos produtos
- Inclusão no carrinho
- Validação do carrinho
- Alteração da quantidade do primeiro item
- Remoção do segundo item
- Checkout
- Preenchimento do endereço
- Preenchimento dos dados de pagamento
- Revisão do pedido
- Finalização da compra
- Validação da compra
- Logout

---

## Dados de teste

Os dados utilizados durante os testes estão centralizados na pasta:

```text
data/
```

Contendo:

```text
users.json
products.json
checkout.json
```

Essa abordagem permite alterar usuários, produtos e informações de checkout sem necessidade de modificar o código dos testes.

---

## Execução

### Iniciar o Appium

```powershell
appium
```

ou

```powershell
npx appium
```

---

### Executar os testes

```powershell
npm run wdio
```

---

### Gerar relatório Allure

```powershell
npx allure generate .\allure-results --clean -o .\allure-report
```

---

### Abrir relatório

```powershell
npx allure open .\allure-report
```

---

## Ferramentas utilizadas durante o desenvolvimento

### Android Studio

Utilizado para:

- criação do emulador Android;
- instalação do APK;
- gerenciamento do Android SDK.

### Appium Inspector

Utilizado para:

- inspeção dos elementos da interface;
- identificação dos Accessibility IDs;
- validação dos seletores utilizados na automação.

### WebdriverIO

Framework responsável pela implementação da automação.

### Appium

Servidor responsável pela comunicação entre o WebdriverIO e o dispositivo Android.

### Allure

Utilizado para geração do relatório de execução dos testes.

---

## Desafios encontrados

Durante o desenvolvimento da automação alguns comportamentos exigiram adaptações:

- Por ser o primeiro contato com Appium e WebdriverIO, foi necessário realizar toda a configuração inicial do ambiente Android (SDK, JAVA_HOME, ADB, Appium e emulador) antes do desenvolvimento da automação.
- O Android Studio e o Visual Studio Code estavam utilizando ambientes distintos (Windows e WSL), exigindo a unificação da configuração para execução dos testes localmente.
- O aplicativo apresenta um diálogo de compatibilidade do Android que pode surgir tanto na inicialização quanto após períodos de inatividade, sendo necessário tratá-lo para evitar interrupções na execução dos testes.
- Algumas telas reutilizam Accessibility IDs para campos semelhantes (como **Full Name**), tornando necessário validar a tela atual antes de interagir com os elementos para evitar ambiguidades.
- Durante a implementação do fluxo completo foi necessário compreender o comportamento da navegação da aplicação, como o retorno automático ao catálogo após a conclusão da compra e o redirecionamento para a tela de login após o logout.
- As telas de checkout apresentam campos de preenchimento obrigatórios, aparentemente já preenchidos, entretanto os mesmos se revelaram como placeholders, o que precisou de um tratamento adicional.

---

## Refatoração para Page Objects

Diferente do módulo principal (Frontend), o módulo mobile foi estruturado e desenvolvido como um módulo de Page Objects desde o começo, para evitar redundâncias e tornar a implementação mais robusta e de facilidade de manutenção, dado que não havia experiência previa com automação mobile em geral.

---

## Observações

- O projeto foi desenvolvido priorizando a utilização dos **Accessibility IDs** disponibilizados pela aplicação, evitando o uso desnecessário de seletores XPath e tornando a automação mais robusta e de fácil manutenção.
- Foi configurado o **Allure Report** para geração dos relatórios de execução, permitindo visualizar os resultados dos testes de forma organizada e facilitando a apresentação da solução.
- Todos os dados utilizados durante os testes foram externalizados para arquivos JSON, permitindo alterar usuários, produtos e informações de checkout sem necessidade de modificar o código da automação.
