# 🍽️ Calculadora de Gorjetas

Um aplicativo mobile simples, prático e direto ao ponto para calcular o valor da gorjeta em restaurantes e bares. Desenvolvido como projeto prático para consolidar conhecimentos em desenvolvimento mobile.

## 📱 Sobre o Projeto

A **Calculadora de Gorjetas** permite que o usuário insira o valor total da conta e a porcentagem de gorjeta que deseja deixar para o atendimento. O aplicativo processa os dados instantaneamente e exibe o valor exato da gorjeta a ser paga. 

O design foi pensado com uma temática de "Restaurante/Lifestyle", utilizando tons de laranja para uma interface agradável e intuitiva.

## ✨ Funcionalidades

- **Entrada de Dados:** Campos numéricos dedicados para o "Valor da Conta (R$)" e a "Gorjeta (%)".
- **Cálculo Preciso:** Processamento dos valores em tempo real, tratando as entradas para evitar erros de digitação (como uso de vírgulas no lugar de pontos).
- **Teclado Dinâmico:** O teclado numérico é recolhido automaticamente ao acionar o botão de cálculo, melhorando a experiência do usuário.
- **Reset de Estado:** Botão dinâmico que permite realizar um novo cálculo facilmente limpando os dados anteriores.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[React Native](https://reactnative.dev/):** Framework principal para o desenvolvimento da interface mobile.
- **[Expo](https://expo.dev/):** Plataforma que facilita a criação, testes e build do projeto React Native.
- **JavaScript:** Lógica de programação e formatação dos cálculos.
- **React Hooks:** Utilização de `useState` para gerenciamento de estados dinâmicos (valores, mensagens de feedback e textos de botões).

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura clássica e componentizada, facilitando a manutenção e a escalabilidade do código:

```text
calculadora-gorjeta/
├── App.js                 # Ponto de entrada do aplicativo
├── src/
│   └── components/
│       ├── Title/         # Componente do cabeçalho
│       ├── Form/          # Componente principal de formulário e lógica
│       │   └── ResultGorjeta/ # Componente de exibição do resultado final
└── package.json           # Dependências e scripts do projeto
🛠️ Como Executar o Projeto
Para testar este aplicativo na sua máquina de forma fluida e sem sobrecarregar o processamento com emuladores pesados, recomendamos o uso do Expo Go direto no seu smartphone.

Pré-requisitos
Ter o Node.js instalado.

Ter o aplicativo Expo Go instalado no seu celular (disponível na App Store e Google Play).

Passo a Passo
Clone este repositório ou baixe o código-fonte.

Abra o terminal na pasta raiz do projeto.

Instale as dependências executando:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npx expo start
Com o servidor rodando, um QR Code aparecerá no terminal.

Abra o aplicativo Expo Go no seu celular e escaneie o QR Code. O aplicativo será compilado e aberto instantaneamente na tela do seu dispositivo!
