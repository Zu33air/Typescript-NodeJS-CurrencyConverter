#! /usr/bin/env node
import inquirer from "inquirer";

// Computer Generated number

const compInput = Math.floor(Math.random() * 10);

console.log(`You have only three attempts`);
async function userGuess() {
  let userInput = await inquirer.prompt([
    {
      name: "userGuess",
      type: "number",
      message: "Enter any number from 1 to 10",
    },
  ]);

  if (userInput.userGuess === compInput) {
    console.log(`You Win! Correct Guess`);
  }

  if (userInput.userGuess > compInput) {
    console.log(`You Lost! Your Guess is too High`);
  } else if (userInput.userGuess < compInput) {
    console.log(`Sorry Lost! Your guess is too Low`);
  }
}

await userGuess();
doAgain();
let userChoice: string = "Y";

async function doAgain() {
  let doAgain = await inquirer.prompt([
    {
      name: "tryAgain",
      type: "input",
      message: "Do you want to Try again Y or N",
    },
  ]);

  if (doAgain.tryAgain == userChoice) {
    userGuess();
  } else {
    console.log("Nice Try");
  }
}
