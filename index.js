var score = 0;

function popQuiz(score) {
  var name = prompt("What is your name: ");
  console.log(`Welcome to the Pop Quiz ${name}`);
  console.log(
    "First Question, What 1997 N64 video game, widely cited as one of the greatest of all time, features James Bond up against a criminal syndicate and is named after the 1995 film in the Bond franchise?",
  );
  var firstAnswer = prompt("A: Goldeneye or B: First Light");
  if (firstAnswer === "A" || "a") {
    score = score + 1;
    console.log("Congragulations! One point awarded!");
    console.log(score);
  } else {
    console.log(
      "Sorry the answer was GoldenEye for the Nintendo 64. No points awarded.",
    );
  }
  console.log(
    "Second Question: Originally given the Japanese title “Puckman,” what 1980s arcade game was inducted into the Guinness Book of Records as the Most Successful Coin-Operated Game in 2005?",
  );
  var secondAnswer = prompt("A: F***-Man or B: PacMan");
  if (secondAnswer === "B" || "b") {
    score = score + 1;
    console.log("Congragulations! One point awarded!");
    console.log(score);
  } else {
    console.log(
      "Sorry the answer was GoldenEye for the Nintendo 64. No points awarded.",
    );
  }
  console.log(
    "Third Question: Which spooky 2001 GameCube game starring Mario’s brother got a reboot for Nintendo Switch in 2019?",
  );

  var thirdAnswer = prompt("A: Luigi's Mansion or B: Eternal Darkness");
  if (thirdAnswer === "A" || "a") {
    score = score + 1;
    console.log("Congragulations! One point awarded!");
    console.log(score);
  } else {
    console.log(
      "Sorry the answer was GoldenEye for the Nintendo 64. No points awarded.",
    );
  }

  if (score === 3) {
    console.log("Congragulations! You are a winner!");
  } else if (score === 2) {
    console.log("Not a winner, but not a total loser either.");
  } else {
    console.log("You might want to find new employment, kid.");
  }

  return score;
}

popQuiz(score);
