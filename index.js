function randomDice() {
  var playerOnePoint = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".img1").src = './images/dice' + playerOnePoint + '.png';
  var playerTwoPoint = Math.floor(Math.random() *6 + 1);
  document.querySelector(".img2").src = './images/dice' + playerTwoPoint + '.png';
  if (playerOnePoint == playerTwoPoint) {
    document.querySelector("h1").innerHTML = "Draw";
  } else if (playerOnePoint < playerTwoPoint) {
    document.querySelector("h1").innerHTML = "Player 2 Won";
  } else {
    document.querySelector("h1").innerHTML = "Player 1 Won";
  }
  document.querySelector(".btn").innerHTML = "Play Again";
}
document.querySelector(".btn").addEventListener("click", randomDice);
