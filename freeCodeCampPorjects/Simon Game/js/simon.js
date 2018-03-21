	var userSeq = [];
	var playSeq = [];
	var color, id;
	var level = 0;
	var boardSound = [
		"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",  //green
		"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",  //red
		"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",  //blue
		"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"   //yellow
	];

$(document).ready(function(){
	//init board sequence
	$(".start").on("click",function(){
		level += 1;
		initSequence();
	});

	//User clicking
	$(".pad").on("click",function(){
		id = $(this).attr("id");
		color = $(this).attr("class").split(" ")[1];
		userSeq.push(id);
		console.log(id+" "+color);
		addSound(id, color);
		// check user sequence (true or false) give error meg
		if(!userCorrect()){
			userError();
			userSeq = []; //re-enter!!
		}
		//to check the end of sequence
		if(userSeq.length == playSeq.length && userSeq.length < 5){
			level += 1;
			userSeq = [];
			initSequence();
		}
		//check for winners
		if(userSeq.length == 5){
			$(".display").text("Win!");
		}
	})

})//document 

// Simon sequence
function initSequence(){
	$(".display").text(level)
	giveRandomNum();
	var i = 0;
	var myInterval = setInterval(function(){
		id = playSeq[i];
		color = $("#"+id).attr("class").split(" ")[1];
		// grab the color by class
		console.log(id+" "+color);
		addSound(id,color);
		i += 1;

		if(i == playSeq.length){
			clearInterval(myInterval);
		}
	}, 1000);

}

// give random number
function giveRandomNum(){
	var random = Math.floor(Math.random() * 4);
	playSeq.push(random);
}

// add class to sound
function addSound(id,color){
	$("#"+id).addClass(color+"-active");
	playSound(id);
	setTimeout(function(){
		$("#"+id).removeClass(color+"-active");
	},500);
}

// play sound
function playSound(id){
	var sound = new Audio(boardSound[id]);
	sound.play();
	}

function userCorrect(){
	for(var i = 0; i < userSeq.length; i++){
		if(userSeq[i] != playSeq[i]){
			return false;
		}
	}
	return true;
}

function userError(){
	$(".display").text("!!");
	var counter = 0;
	var myError = setInterval(function(){
		counter += 1;
		if(counter == 3){
			$(".display").text(level);
			clearInterval(myError);
			userSeq = [];
			counter = 0;
		}
	},500)
}
