let input = document.getElementById("calculatorInput");
let button = document.querySelectorAll(".inputElements");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".evaluate")


//This loop assigns an event listener to each button, When the button is clicked
//the append method is called to add that number to the calculator display.
button.forEach((btn, idx) => {
  btn.addEventListener('click', (b) => {
    let num = b.target.innerText;
    input.append(num);
  })
});

//clears inputs of inside the calculator display
clear.addEventListener('click', () => {input.innerText=""})

//evaluates the expression
equals.addEventListener('click', () => {

input.innerText = eval(input.innerText)})


//appendNum(selectedNumber) {

//}
