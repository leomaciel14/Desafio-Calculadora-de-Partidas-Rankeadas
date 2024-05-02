const prompt = require('prompt-sync')();

let pdlTotal = 0;
let perguntasFeitas = false;

function determinarElo(pdlPersonagem) {
    let eloPersonagem = '';

    switch (true) {
        case (pdlPersonagem <= 10):
            eloPersonagem = "Ferro";
            break;
        case (pdlPersonagem >= 11 && pdlPersonagem <= 20):
            eloPersonagem = "Bronze";
            break;
        case (pdlPersonagem >= 21 && pdlPersonagem <= 50):
            eloPersonagem = "Prata";
            break;
        case (pdlPersonagem >= 51 && pdlPersonagem <= 80):
            eloPersonagem = "Ouro";
            break;
        case (pdlPersonagem >= 81 && pdlPersonagem <= 90):
            eloPersonagem = "Diamante";
            break;
        case (pdlPersonagem >= 91 && pdlPersonagem <= 100):
            eloPersonagem = "Lendário";
            break;
        case (pdlPersonagem >= 101):
            eloPersonagem = "Imortal";
            break;
        default:
            eloPersonagem = "Inválida";
            break;
    }

    return eloPersonagem;
}

function validarpdlPersonagem() {
    if (!perguntasFeitas) {
        let vitorias = -1;
        let derrotas = -1;
        console.log("Seja bem-vindo à Calculadora de Elo de Partidas Ranqueadas!");
        console.log("-----------------------------------------------------------");        
        
        while (vitorias < 0) {
            vitorias = parseInt(prompt(`1º - Quantas vitórias o Herói teve? `));
            if (isNaN(vitorias) || vitorias < 0) {
                console.log('Por favor, insira um número inteiro positivo ou zero de vitórias.');
                vitorias = -1;
            }
        }
        
        while (derrotas < 0) {
            derrotas = parseInt(prompt(`2º - Quantas derrotas o Herói teve? `));
            if (isNaN(derrotas) || derrotas < 0) {
                console.log('Por favor, insira um número inteiro positivo ou zero de derrotas.');
                derrotas = -1;
            }
        }
        
        pdlTotal += vitorias - derrotas;
        perguntasFeitas = true;
    }
    return pdlTotal;
}

function alterarPDL() {
    let operacao = prompt(`Deseja adicionar ou remover pontos? (adicionar/remover/encerrar) `).toLowerCase();

    if (operacao === 'adicionar') {
        reiniciar = 'sim'
        let pontosAdicionais = parseInt(prompt(`Quantos pontos você deseja adicionar? `));
        pdlTotal += pontosAdicionais;
    } else if (operacao === 'remover') {
        reiniciar = 'sim'
        let pontosRemovidos = parseInt(prompt(`Quantos pontos você deseja remover? `));
        pdlTotal -= pontosRemovidos;
    } else if (operacao === 'encerrar') {
        let validacaoEncerramento = prompt(`Tem certeza dessa opção (sim/não)? `);
        if (validacaoEncerramento === 'sim'){
            reiniciar = 'nao';
            console.log('-----------------------------------------------------------');
            console.log('PROGRAMA ENCERRADO!');
            console.log('Obrigado por utilizar, volte sempre!');
            console.log('-----------------------------------------------------------');
        } else {
            reiniciar = 'sim'
        }
    } else {
        console.log('Por favor, insira uma opção válida!')
        return alterarPDL();
    }
}

let reiniciar = 'sim';

do {
    let pdlPersonagem = validarpdlPersonagem();
    let eloPersonagem = determinarElo(pdlPersonagem);
    let frasePadrao = `O Herói tem um saldo de ${pdlPersonagem} PDL e está no elo ${eloPersonagem}!`;
    console.log('-----------------------------------------------------------');
    console.log(frasePadrao);
    alterarPDL();
} while (reiniciar === 'sim');