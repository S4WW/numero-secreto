let numerosEscolhidos = [];
let numerolimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;
let chute;


console.log (numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numerolimite}`);
}
mensagemInicial()

function verificarChute() {
    chute = document.querySelector('input').value;
    let singularPlural = tentativas > 1? "tentativas": "tentativa";
    let mensagemTentativas = (` Você acertou em ${tentativas} ${singularPlural}!`);

    if ( chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute ("disabled");
    }else if(numeroSecreto > chute) {
        exibirTextoNaTela('h1', 'Errou!!');
        exibirTextoNaTela('p', 'O número secreto é maior');
        tentativas ++
        limparCampo()
    }else{
        exibirTextoNaTela('h1', 'Errou!!');
        exibirTextoNaTela('p', 'O número secreto é menor');
        tentativas ++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * 10 + 1);
    let quantidadeNumerosSorteados = numerosEscolhidos.length;

    if(quantidadeNumerosSorteados == numerolimite){
        numerosEscolhidos = [];
    }
    
    if (numerosEscolhidos.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }else{
        numerosEscolhidos.push(numeroSorteado);
        console.log(numerosEscolhidos);
        return numeroSorteado;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ("");
}

function reiniciar() {
    tentativas =1;
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    document.getElementById("reiniciar").setAttribute ("disabled", true);
}
