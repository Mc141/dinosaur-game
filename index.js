
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  obstacle.classList.add("block");
  sleep(1000);
});

const dino = document.querySelector("#character");
const obstacle = document.querySelector(".obstacle");

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    dino.classList.add("jump");
    setTimeout(removeClass, 500);
  }
});

document.addEventListener("click", (e) => {
    dino.classList.add("jump");
    setTimeout(removeClass, 500);
});

setInterval(checkIfDead, 1);

function checkIfDead() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (obstacleLeft < 20 && obstacleLeft > -20 && dinoTop >= 130) {
    alert("You lose!");
    location.reload();
  }
}

function removeClass() {
  dino.classList.remove("jump");
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {}
}
