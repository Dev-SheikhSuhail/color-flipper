//The array represents the possible values for a hexadecimal color code.
const hexCodeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let hexColor = "#"; //As the hexadecimal color code always start with #.
  // The loop is used to generate a six-digit hexadecimal color code.
  for (let i = 0; i < 6; i++) {
    /*Called the function to get a random index from the hexCodeArr array.*/
    hexColor += hexCodeArr[getRandomNum()];
  }
  color.innerText = hexColor;
  document.body.style.backgroundColor = hexColor;
});
const getRandomNum = () => Math.floor(Math.random() * hexCodeArr.length);
