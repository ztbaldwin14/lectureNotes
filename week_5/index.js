let game = () => {
  let numberGuessed = Math.floor(Math.random() * 10 + 1);
  let gameLost = false;

  for (let guessCount = 3; guessCount >= 1; guessCount--) {
    let userInput = parseInt(prompt("pick a number from 1-10"));

    if (userInput < 1 || userInput > 10) {
      alert("guess outside of range");
    } else {
    if (userInput === numberGuessed) {
        alert("Congratulations, you guessed correctly!");
        break;
      } else if (guessCount > 1 && userInput < numberGuessed) {
        alert("try again, you guessed too low");
      } else if (guessCount > 1 && userInput > numberGuessed) {
        alert("try again, you guessed too high");
      } else {
        gameLost = true;
      }
    }
  }

  if (gameLost) {
    alert("YOU LOSE");
  }
  console.log(numberGuessed);
};