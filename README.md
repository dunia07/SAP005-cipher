# Cheats

## Índice

* [1. Introdução](#1-introdução)
* [2. Utilização](#2-utilização)
* [3. Usuários](#3-usuários)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Desenvolvimento](#5-desenvolvimento)

***

## 1. Intrudução

A proposta era desenvolver uma aplicação que utilizasse a cifra de César para
cifrar e decifrar determinada mensagem.

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

## 2. Utilização

:heavy_multiplication_x: Para acessar a aplicação [Clique aqui!](https://dunia07.github.io/SAP005-cipher/)

Insira a mensagem
Insira o número chave de deslocamento
Escolha se deseja codificar ou decodificar a mensagem original

## 3. Usuários

Qualquer pessoa que tem o desejo de passar e receber informações de forma sigilosa.
Desde um aluno universitário, que deseja passar cola sem ser pego, até a namorada que deseja conversar com o/a seu/sua amado/a sem que ninguém saiba.

## 4. Considerações gerais

A aplicação apresenta as seguintes características:

* `REAME.md`: explição de como fazer deploy, instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/index.html`: ponto de entrada da aplicação. Este arquivo contém a marcação 
  HTML e chama o CSS e JavaScript necessários.
* `src/cipher.js`: objeto `cipher` implementado, o qual já está
  Este objeto (`cipher`) contém dois métodos:
  - `cipher.encode(offset, message)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `message` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, message)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `message` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: eventos de DOM sendo executados, chamar `cipher.encode()` e 
  `cipher.decode()`.

## 5. Desenvolvimento

Para o desenvolvimento da aplicação foi utilizado o Visual Studio Code com extenção Node-js. 
A estrutura foi feita em HTML, estilo em CSS, utilizando vanilla JavaScript como linguagem de programação.