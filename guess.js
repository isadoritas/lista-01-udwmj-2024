const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 10) + 1;

rl.question("Adivinhe um número entre 1 e 10: ", (userGuess) => {
  if (parseInt(userGuess) === randomNumber) {
      console.log("Parabéns! Você acertou. O número era " + randomNumber);
  } else {
      console.log("Que pena! Você errou. O número era " + randomNumber);
  }
  rl.close();
});