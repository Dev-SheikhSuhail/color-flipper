const colorsArr = [
  "gray",
  "yellow",
  "green",
  "brown",
  "blue",
  "aqua",
  "teal",
  "rgba(233,122,200)",
  "#f15025",
];
const color = document.querySelector(".color");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const randomNumber = getRandomNum();
  document.body.style.backgroundColor = colorsArr[randomNumber];
  color.innerText = colorsArr[randomNumber];
});
const getRandomNum = () => Math.floor(Math.random() * colorsArr.length);
/*  Math.random - Generates a random floating-point number between 0(inclusive) 
    and 1(exclusive).

    Here, Multiplied by array length to generate the random floating-point number between 0(starting index) and 9(array length). It scales this random number to the range [0, colorsArr.length], but may still have a decimal part.

    Math.floor - Used to round down a floating-point number to the nearest integer less than or equal to the original number. Removes the decimal part of the number.
    Here, Used to round down this scaled number to the nearest whole number, ensuring that the result is a valid integer index for the array.
*/
