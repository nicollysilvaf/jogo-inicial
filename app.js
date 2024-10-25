let listaDeNumerosSorteados = []; 
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio(); 
let tentativas = 1;  

function exibirTextoNaTela (tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    //responsiveVoice.speak(texto , 'Brazilian Portuguese Female' , {rate: 1.2});
}

function mensangemInicialDoJogo() {
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , `Escolha um número entre 1 e ${numeroLimite}` );     
}

mensangemInicialDoJogo(); 

function verificarChute() {
    console.log(numeroSecreto);
    let chute = document.querySelector('input').value; 
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1' , 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}, parabéns!`; 
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p' , `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela ('p' , `O número secreto é maior que ${chute}`);
        }
        tentativas++; 
        limparCampo();
    }   
}

function numeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
   let quantidadeNumerosLista = listaDeNumerosSorteados.length;

   if (quantidadeNumerosLista == numeroLimite){
    listaDeNumerosSorteados = []; 
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio(); 
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido; 
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1; 
    mensangemInicialDoJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

