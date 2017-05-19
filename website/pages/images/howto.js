var inp = document.getElementById("inp");
var btn = document.getElementById("btn");
var disp = document.getElementById("disp");
var coloring = document.getElementById("coloring")
var clearBtn = document.getElementById("clearBtn")
btn.addEventListener("click", function() {
  
  if (coloring.value === "white") {
    disp.innerHTML += "<div style='color:#FFFFFF	'>" + inp.value + "</div>"
  }
  else if (coloring.value === "black") {
    disp.innerHTML += "<div style='color:##000000'>" + inp.value + "</div>"
  }
  
  else if (coloring.value === "blue") {
    disp.innerHTML += "<div style='color:#0033cc'>" + inp.value + "</div>"
  }
  else if (coloring.value === "maroon") {
    disp.innerHTML += "<div style='color:#800000'>" + inp.value + "</div>"
  }
  else if (coloring.value === "pink") {
    disp.innerHTML += "<div style='color:#ff0066'>" + inp.value + "</div>"
  }
})

// This lets the user delete their work by clicking on what they want to delete
disp.addEventListener("click", function(evt) {
  evt.target.parentNode.removeChild(evt.target);
})

//  This is what makes the user to be able to click the clear work button that
//deletes all the users work
clearBtn.addEventListener("click", function() {
  disp.innerHTML = ""
})