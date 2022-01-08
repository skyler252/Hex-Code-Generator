const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".button");
const bodyBgColor = document.querySelector("body");
const hexCode = document.querySelector(".hex-code");

button.addEventListener("click", getHexCode);

function getHexCode() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexColor += hexNumbers[random];
  }

  bodyBgColor.style.backgroundColor = hexColor;
  hexCode.innerText = hexColor;
  hexCode.style.color = hexColor;
};