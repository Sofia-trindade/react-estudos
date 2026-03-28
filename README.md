# React - Básico

## Introdução

### O que é o ReactJS?

É uma biblioteca de JavaScript eficiente e flexível, sendo útil no desenvolvimento de interfaces de usuário.

> Pode ser utilizado p/ diferentes finalidades → suas Derivações do Reactjs:

1. Aplicações Web → React DOM
2. Aplicações Mobile → React Native
3. Aplicações Desktop → Electron
4. Aplicações p/ TV → React TV
5. Aplicações de Realidade Aumentada → React VR

> Eles nos permite criar interfaces complexas a partir de **“pedaços de código pequenos”** e isoladas, chamados de **componentes**.

### Como o ReactJS funciona?

- **Compiilers** (compilador): Conversão de código p/ o reconhecimento do navegador  → tipo: ***Babel*** é compilador usado no React.
- **Bundlers** (pacotes): é um ***Webpack*** que faz a junção de otimizam e processam múltiplos arquivos (JavaScript, CSS, imagens) e converte em um único arquivo pro navegador
- **Rendering Patterns** (Padrões de Renderização): referem-se às diferentes estratégias de como e onde o conteúdo de uma página web é transformado em HTML e entregue ao navegador do usuário.

### Criando o primeiro projeto React

- Entendendo a estrutura do projeto
- Removendo arquivos que não será necessário
- ***Fluxo de Renderização* do React** é o processo pelo qual a biblioteca atualiza a interface do usuário (UI) para refletir mudanças nos dados, utilizando um mecanismo eficiente para minimizar manipulações no ***DOM real***. Esse fluxo pode ser resumido em três fases principais:
    - ***Gatilho (Trigger)***
    - ***Renderização (Render)***
    - ***Commit***
- StricMode
    - Ferramentas para checar possíveis más práticas no código React. Caso encontre potenciais problemas, emite ***Warnings*** (apenas no ambiente de desenvolvimento).
        - Exemplos de checagens de erros?
- Componentes em Classes 
💡 É possível criar atributos (variáveis) na sua classe e utilizá-los dentro do seu HTML
