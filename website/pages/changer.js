var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

// these variables will make the button click 

// colorChangeButton.addEventListener("click", function(){
//     document.body.style.backgroundcolor = newBGColor.value;
// })
// function colorChanger (){
    
// } 

/* EventListener for button.
   sets the body's background color */
  colorChangeButton.addEventListener("click", function(){
  document.body.style.backgroundColor = newBGColor.value;
})