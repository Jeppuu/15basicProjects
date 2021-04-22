//setting initial count
let count = 0;

//select value and button
const value =document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//loop through all buttons
btns.forEach(function (btn) {
  //add a event listener for click events
  btn.addEventListener('click', function (e) {
    //find the class of the button
    const styles = e.currentTarget.classList;
    //increase, decrease or reset count depending on the button
    if(styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    //change count color depending on it's value
    if(count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
