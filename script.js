function jogar(playerChoice) {
   const options = ['pedra', 'papel', 'tesoura'];
    //Gera um numero aleatorio ente 0, 1, 2
   const randomNum = Math.floor(Math.random() * 3);
   const computerChoice = options[randomNum];

   //atualiza a tela com as escolhas feitas
    document.getElementById('player-choice').textContent = formatarTexto(playerChoice)
    document.getElementById('computer-choice').textContent = formatarTexto(computerChoice)

    const resultElement = document.getElementById('game-result')

   //regras de validação do resultado
   if(playerChoice === computerChoice){
    resultElement.textContent = "Empate! 🤝";
    resultElement.style.color = "#ffc107";
   }else if( (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
             (playerChoice === 'papel' && computerChoice === 'pedra') ||
             (playerChoice === 'tesoura' && computerChoice === 'papel')
   ){ 
    resultElement.textContent = "Você Ganhou! 🎉";
    resultElement.style.color = "#28a745";
   }else{
    resultElement.textContent = "Você Perdeu! 😢";
    resultElement.style.color = "#dc3545";
   }

}

function formatarTexto(texto) {
   return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function reiniciar(){
    document.getElementById('player-choice').textContent = "-";
    document.getElementById('computer-choice').textContent = "-";
    document.getElementById('game-result').textContent = "Quem vencerá?";
    document.getElementById('game-result').style.color = "#28a745";
}