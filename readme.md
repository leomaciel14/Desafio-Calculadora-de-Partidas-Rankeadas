# Calculadora do Elo de Partidas Ranqueadas

Este programa permite calcular o Elo de um jogador com base no saldo de suas partidas ranqueadas. Ele aceita entradas para o número de vitórias e derrotas do jogador, calcula o saldo de Partidas de Liga (PDL) e determina o nível de elo correspondente.

Este desafio foi uma atividade do curso da Digital Innovation One (DIO), bootcamp Santander 2024 - Criando Jogos com Godot.

## Clonagem do Repositório

Para clonar o repositório e ter acesso ao código-fonte, execute o seguinte comando em seu terminal:

```bash
git clone https://github.com/leomaciel14/Desafio-Calculadora-de-Partidas-Rankeadas.git
```

## Pré-requisitos

- Node.js instalado em seu sistema;

Para instalar o Node.js, visite [este link](https://nodejs.org/) e siga as instruções de instalação;
- Prompt de comando ou terminal para executar o programa;


## Instruções de Uso

1. Após clonar o repositório, navegue até o diretório do projeto.
2. Execute o programa utilizando o terminal com o seguinte comando:
```bash
node Calculadora_de_Partidas_Rankeadas.js
```
3. Siga as instruções apresentadas pelo programa para inserir o número de vitórias e derrotas do jogador.
4. O programa calculará o saldo de PDL e determinará o elo correspondente do jogador.
5. Você terá a opção de adicionar ou remover pontos, ou encerrar o programa.
6. Após cada iteração, você poderá optar por continuar ou encerrar o programa.

## Sobre o Desafio e Detalhes Adicionais

O desafio consiste em criar um programa que aceite entradas para o número de vitórias e derrotas de um jogador e calcule seu nível de elo com base em um sistema predefinido. A solução envolve a criação de funções para validar as entradas, determinar o elo do jogador e permitir a adição ou remoção de pontos.

O programa foi estruturado em três funções principais:

- `validarpdlPersonagem()`: Esta função é responsável por validar as entradas para o número de vitórias e derrotas do jogador. Ela utiliza loops `while` para garantir que os valores inseridos sejam inteiros positivos ou zero.

- `determinarElo()`: Esta função calcula o nível de elo do jogador com base no saldo de PDL. Ela utiliza uma estrutura de switch para mapear os diferentes intervalos de PDL para os respectivos níveis de elo.

- `alterarPDL()`: Esta função permite ao usuário adicionar ou remover pontos do saldo de PDL e encerrar o programa. A cada interação o saldo de PDL é atualizado de acordo com a escolha do usuário.

Além disso:

- O programa exibe mensagens de erro caso o usuário insira valores inválidos.
- As opções do menu são apresentadas em minúsculas para facilitar a entrada do usuário.
- O programa é encerrado de forma adequada quando o usuário escolhe a opção de encerramento.
- A cada iteração, o programa exibe o saldo de PDL e o nível de elo atual do jogador.

### Obrigado por conferir este repositório! Se gostou do conteúdo, considere salvar na ⭐ para apoiar o projeto!
