function playGame() {
   const userChoice = document.getElementById("jokenpo").value;
   const choices = ["pedra", "papel", "tesoura"];
   const computerChoice = choices[Math.floor(Math.random() * choices.length)];

   let result = ""; 
   if (userChoice === computerChoice) {
       result = "Empate!";
   } else if (
       (userChoice === "pedra" && computerChoice === "tesoura") ||
       (userChoice === "papel" && computerChoice === "pedra") ||
       (userChoice === "tesoura" && computerChoice === "papel")
   ) {
       result = "Você venceu!";
   } else {
       result = "Você perdeu!";
   }

   document.getElementById("result").textContent = `Você escolheu: ${userChoice}. O computador escolheu: ${computerChoice}. ${result}`;

}