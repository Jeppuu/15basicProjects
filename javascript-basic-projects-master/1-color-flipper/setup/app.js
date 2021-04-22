//basic variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//add a event listener for the button
btn.addEventListener('click', function() {
  //get a random number between 0-3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
}
