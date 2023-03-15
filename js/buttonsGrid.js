//Get each button into a variable
const bnt1 = document.getElementById('btn1'),
      btn2 = document.getElementById('btn2'),
      btn3 = document.getElementById('btn3'),
      btn4 = document.getElementById('btn4'),
      btn5 = document.getElementById('btn5'),
      btn6 = document.getElementById('btn6'),
      btn7 = document.getElementById('btn7'),
      btn8 = document.getElementById('btn8'),
      btn9 = document.getElementById('btn9');
//Create array of buttons
const arr = [bnt1, btn2, btn3, btn6, btn9, btn8, btn7, btn4]

//Create array of numbers in the order in which they should change each other
const arrValues = [1,2,3,6,9,8,7,4 ]

const clockwise = () => {
//Shift the array of numbers one number to the right, the last number becomes the first
    arrValues.unshift(arrValues.pop());
//Set the HTML markup contained within the every button to actual number
    for (let i=0; i<arr.length; i++){
       arr[i].innerHTML = arrValues[i] 
    }
}
//Add an event listener to button #5
btn5.addEventListener("click", clockwise);
