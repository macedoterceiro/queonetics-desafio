# Auditoria de Performance Web (Core Web Vitals)

## Objetivo

Avaliar o desempenho da aplicação OWASP Juice Shop sob condições de uso simuladas, identificando gargalos que impactam a experiência do usuário e propondo melhorias baseadas nas métricas Core Web Vitals e nos diagnósticos fornecidos pelo Google Lighthouse e Chrome DevTools.

---

## Ferramentas Utilizadas

- Google Chrome DevTools
- Lighthouse
- Performance (Chrome DevTools)

---

## Ambiente de Teste

Aplicação analisada:

- OWASP Juice Shop
- Execução local em container Docker
- Navegador Google Chrome

Configuração da simulação:

- Rede: **3G**
- CPU: **Desaceleração de 4x**
- Cache desabilitado durante os testes

Essa configuração aproxima o comportamento da aplicação em dispositivos móveis com capacidade limitada de processamento e conexão reduzida.

---

## Métricas Obtidas

### Lighthouse

| Métrica | Resultado |
|----------|----------:|
| Performance Score | **47/100** |
| First Contentful Paint (FCP) | **3,7 s** |
| Largest Contentful Paint (LCP) | **6,4 s** |
| Total Blocking Time (TBT) | **900 ms** |
| Cumulative Layout Shift (CLS) | **0,065** |
| Speed Index | **4,1 s** |

---

### Simulação em Rede 3G + CPU 4x

Durante a execução do painel Performance foram obtidos os seguintes resultados:

| Métrica | Resultado |
|----------|----------:|
| LCP | **20,45 s** |
| CLS | **0,00** |
| Tempo total da captura | **46,39 s** |
| Processamento de scripts | **1,04 s** |
| Tempo de execução na Main Thread | **887 ms** |
| Dados transferidos | **1.136 KiB** |

Observação:

Nas versões atuais do Chrome DevTools a métrica **Time to Interactive (TTI)** deixou de ser apresentada diretamente, sendo substituída por métricas mais recentes, como **Interaction to Next Paint (INP)**. Apesar disso, a simulação exigida (CPU 4x e rede 3G) foi realizada normalmente, permitindo avaliar o comportamento da aplicação sob condições degradadas.

---

# Diagnóstico

A análise identificou três gargalos principais responsáveis pela degradação do desempenho da aplicação.

## 1. Tempo elevado do Largest Contentful Paint (LCP)

O maior elemento visível da página demora significativamente para ser renderizado.

Resultados observados:

- LCP: 6,4 s (Lighthouse)
- LCP: 20,45 s (CPU 4x + Rede 3G)

Segundo as recomendações do Google, valores superiores a 4 segundos representam uma experiência ruim para o usuário.

O principal elemento responsável pelo LCP corresponde às imagens dos produtos exibidos na página inicial.

---

## 2. Execução excessiva de JavaScript

O Lighthouse identificou elevado tempo de processamento JavaScript, refletindo diretamente na responsividade inicial da aplicação.

Foram identificados:

- Reduza tempo de execução do JavaScript
- Reduza JavaScript não utilizado
- Minimize o trabalho da thread principal

Durante a análise do painel Performance observou-se intensa atividade de execução de módulos JavaScript, processamento de eventos e renderização da interface antes da página atingir seu estado estável.

---

## 3. Recursos que atrasam a renderização

A auditoria identificou diversos recursos capazes de atrasar a renderização da página.

Principais diagnósticos:

- Exibição de fontes (economia estimada de aproximadamente 3 s)
- Melhorar entrega de imagens
- Otimizar tamanho do DOM
- Recursos JavaScript carregados antes da renderização

Embora o CLS tenha apresentado excelente resultado (0,065), o carregamento inicial permanece elevado devido ao volume de recursos processados antes da exibição completa da interface.

---

# Recursos Pesados Identificados

Durante a auditoria foram observados os seguintes pontos relacionados aos recursos carregados pela aplicação.

## Imagens

Foi identificado que as imagens dos produtos representam o principal elemento responsável pelo Largest Contentful Paint.

O Lighthouse recomenda:

- Compressão das imagens;
- Utilização de formatos modernos (WebP ou AVIF);
- Definição explícita de largura e altura;
- Uso de Lazy Loading para imagens fora da área visível.

---

## JavaScript

A aplicação realiza grande quantidade de processamento JavaScript durante a inicialização.

Foram observados:

- Execução de módulos JavaScript;
- Processamento de eventos;
- Recalculo de estilos;
- Atualizações do DOM.

Essas atividades aumentam o tempo de carregamento e retardam a disponibilidade da interface para interação do usuário.

---

## Recursos bloqueantes

Foram identificados recursos que impactam diretamente a renderização inicial da página.

Entre eles destacam-se:

- Carregamento de fontes;
- Scripts JavaScript executados durante a inicialização;
- Processamento de estilos CSS.

---

# Recomendações de Melhoria

Com base nos resultados obtidos, recomenda-se:

1. Converter imagens para formatos modernos (WebP ou AVIF).

2. Aplicar Lazy Loading nas imagens que não estão imediatamente visíveis.

3. Minificar e remover código JavaScript não utilizado.

4. Adiar carregamento de scripts não essenciais utilizando técnicas de carregamento assíncrono.

5. Definir largura e altura explícitas para todas as imagens.

6. Otimizar o carregamento das fontes utilizando `font-display: swap`.

7. Reduzir o trabalho realizado na Main Thread durante a inicialização.

8. Continuar monitorando as métricas Core Web Vitals após cada alteração de desempenho.

---


# Conclusão

A auditoria demonstrou que a aplicação apresenta desempenho satisfatório em condições normais de execução, porém sofre degradação significativa quando submetida a cenários de dispositivos móveis com limitação de CPU e rede.

O principal gargalo identificado foi o elevado tempo de Largest Contentful Paint, seguido pelo excesso de processamento JavaScript e pelo carregamento de recursos que atrasam a renderização inicial.

As recomendações apresentadas concentram-se principalmente na otimização das imagens, redução do JavaScript executado durante a inicialização e melhoria da estratégia de carregamento dos recursos estáticos, permitindo reduzir significativamente o tempo de carregamento percebido pelo usuário e melhorar os indicadores Core Web Vitals.