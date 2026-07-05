# Queonetics - Desafio Técnico QA

Este repositório reúne a implementação dos três módulos propostos no desafio técnico:

- Testes de API
- Testes Frontend Web
- Testes Mobile

Cada módulo foi desenvolvido utilizando a ferramenta mais adequada ao cenário proposto e documentado individualmente em seu respectivo **README.md**.

| Módulo | Ferramenta | Ambiente |
|---------|------------|-----------|
| API | Postman | Windows |
| Frontend | Cypress + VS Code | Ubuntu (WSL) |
| Mobile | Appium + WDIO + VS Code + Android Studio | Windows |

---

# Estrutura do projeto

```text
queonetics-desafio/
│
├── api/
│   ├── README.md
│   └── Driver App.postman_collection.json
│
├── frontend/
│   ├── README.md
│   └── cypress/
│
├── mobile/
│   ├── README.md
│   ├── app/
│   ├── data/
│   ├── objects/
│   ├── pages/
│   ├── specs/
│   └── wdio.conf.js
│
├── pentest/
│   ├── Auditoria-Pentest.md
│
├── performance/
│   ├── Auditoria-Performance.md
│
└── README.md
```

---

# Tecnologias utilizadas

## API

- Postman

Execução realizada diretamente no **Windows** utilizando o Postman Desktop.

---

## Frontend Web

- Cypress
- JavaScript

O desenvolvimento foi realizado utilizando **Visual Studio Code** executando sobre **Ubuntu (WSL)**.

---

## Mobile

- Appium
- WebdriverIO (WDIO)
- Android Studio
- Appium Inspector
- JavaScript
- Allure Report

O desenvolvimento foi realizado utilizando **Visual Studio Code no Windows**, integrado ao **Android Studio** e ao **Appium** para comunicação com o emulador Android.

---

# Organização

Cada módulo foi desenvolvido de forma independente, utilizando a arquitetura mais adequada para seu contexto.

| Módulo | Arquitetura |
|---------|-------------|
| API | Collections + Environment (Postman) |
| Frontend | Page Object Model |
| Mobile | Page Object Model |

Todos os dados de teste foram externalizados sempre que possível para facilitar manutenção e reutilização.

---

# Considerações sobre o desenvolvimento

Embora o desafio contemplasse três tecnologias distintas, a maior parte do tempo foi dedicada à preparação do ambiente de automação mobile.

Por não possuir experiência prévia com Appium e WebdriverIO, foi necessário configurar praticamente toda a infraestrutura do zero, incluindo:

- Android Studio;
- Android SDK;
- Emulador Android;
- JAVA_HOME;
- Android Debug Bridge (ADB);
- Appium;
- Appium Inspector;
- WebdriverIO;
- Integração entre VS Code, Appium e o emulador.

Durante essa etapa também foi necessário resolver incompatibilidades entre os ambientes Windows e WSL, além da configuração correta das variáveis de ambiente e da comunicação entre todas as ferramentas envolvidas.

Após a estabilização do ambiente, o desenvolvimento da automação ocorreu de forma bastante fluida, permitindo aplicar conceitos de organização em **Page Object Model**, reutilização de componentes e separação entre regras de negócio e dados de teste.

---

# Destaques do projeto

- Organização modular dos três tipos de automação.
- Utilização de **Page Object Model** nos módulos Web e Mobile.
- Dados de teste externalizados.
- Documentação individual para cada módulo.
- Configuração de relatório de execução utilizando **Allure Report** para os testes mobile.
- Estrutura preparada para evolução e manutenção.

---

# Execução

Cada módulo possui seu próprio guia de configuração e execução.

Consulte:

- `api/README.md`
- `frontend/README.md`
- `mobile/README.md`

para instruções detalhadas.

---

# Observações

Durante o desenvolvimento foram identificadas algumas regras de negócio e particularidades do ambiente de QA que influenciaram a implementação dos testes. Essas informações encontram-se documentadas nos respectivos READMEs de cada módulo.

O objetivo foi manter a automação o mais próxima possível de um cenário real de projeto, priorizando organização, reutilização de código, clareza na documentação e facilidade de manutenção.
