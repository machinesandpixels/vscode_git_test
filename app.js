console.log('connected');

var colors = [
    "rgb(255, 0, 0)", 
    "rgb(255, 225, 0)", 
    "rgb(0, 255, 0)", 
    "rgb(0, 255, 255)", 
    "rgb(0, 0, 255)", 
    "rgb(255, 0, 255)" 
];
var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++){
    // Add inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
        // Grab color of square
        var clickedColor = this.style.backgroundColor;
        // Compare color of square
        if (clickedColor === pickedColor){
            alert("You did it!");
        }
        else {
            this.style.backgroundColor = "black";
        }
    });
    }

var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
// test
