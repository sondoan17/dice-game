function randomDice() {
  var playerOnePoint = Math.floor(Math.random() * 6);
  document.querySelector(".img1").src = imageFilePath[playerOnePoint];
  var playerTwoPoint = Math.floor(Math.random() * 6);
  document.querySelector(".img2").src = imageFilePath[playerTwoPoint];
  if (playerOnePoint == playerTwoPoint) {
    document.querySelector("h1").innerHTML = "Draw";
  } else if (playerOnePoint < playerTwoPoint) {
    document.querySelector("h1").innerHTML = "Player 2 Won";
  } else {
    document.querySelector("h1").innerHTML = "Player 1 Won";
  }
}
function reloadPage() {
  location.reload();
}
document.querySelector(".btn").addEventListener("click", reloadPage);
var imageFilePath = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];
randomDice();
