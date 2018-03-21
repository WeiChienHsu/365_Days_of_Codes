var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click",function(){
	reset();
})


init(); //When page loaded

function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSqures();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		reset();
		});
 	}	
}

function setupSqures(){
	for(var i=0; i<squares.length; i++){
  	squares[i].addEventListener("click",function(){
  	  var clickedColor = this.style.backgroundColor;
  	  if(clickedColor == pickedColor){
  	  	messageDisplay.textContent = "Correct!";
  	  	resetButton.textContent = "Play Again?";
  	  	changeColor(clickedColor);
  	  	h1.style.backgroundColor = clickedColor;
  	  } else{
  	  	this.style.backgroundColor = "#232323";
  	  	messageDisplay.textContent = "Try Again"
  	 	}
  	  });
	}
function reset(){
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}



function changeColor(color){
	//loop through all squares
	for (var i = 0;i<squares.length;i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;	
	}	
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i=0; i < num ; i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" +r +", "+g+", "+b+")"
} 
