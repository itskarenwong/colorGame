<!-- Karen Wong -->
<!-- colorGame.js -->

// variable declarations and query selections
var numSquares = 6;
var colors = generateRandColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var modeButtons = document.querySelectorAll(".mode");

init();

colorDisplay.textContent = pickedColor;

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    // mode buttons event listener
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        });
    }
}

function setUpSquares(){
    // add initial colors to squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        // grab color of clicked square
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#202020";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset(){
    colors = generateRandColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.backgroundColor = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
}

// resets colors of the squares
resetButton.addEventListener("click", function(){
    colors = generateRandColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
});

easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    messageDisplay.textContent = "";
    colors = generateRandColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    messageDisplay.textContent = "";
    colors = generateRandColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

function changeColors(color){
    // loop through all squares and change the color to the picked color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length); 
    return colors[random];
}

function generateRandColors(numOfColors){
    //array to hold the colors
    var arr = [];
    for(var i = 0; i < numOfColors; i++){
        // get random color and push it into the array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
