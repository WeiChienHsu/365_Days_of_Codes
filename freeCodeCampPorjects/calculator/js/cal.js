$(document).ready(function(){
	var inputs = [""]; //  使用者輸入區
	var totalString; // 顯示使用者輸入
	var operators1 = ["+","-","*","/"];
	var operators2 = ["."];
	var nums = [0,1,2,3,4,5,6,7,8,9];

	function getValue(input){
		// 不能用.計算
		 if(operators2.includes(inputs[inputs.length-1] === true) && input === "."){
      		console.log("Duplicate '.' " );
    	}
		// 不要用+-來開啟計算·用數字開始
		 else if(inputs.length === 1 && operators1.includes(inputs) === false){
       		 inputs.push(input);
      	}
		// Check 最後一個是不是計算符號，或是不能有重複的符號
		else if(operators1.includes(inputs[inputs.length-1])=== false ) {
     		 inputs.push(input);
    	}
		// check 是不是加入數字
		 else if(nums.includes(Number(input))) {
      		inputs.push(input);
   		}

		update();
	}

	function update(){
    	totalString = inputs.join("");
    	$("#steps").html(totalString);
  	}
  
	function getTotal(){
      	totalString = inputs.join("");
    	$("#steps").html(eval(totalString));
 	} 

	$("span").on("click",function(){
		if(this.id === "delete"){
     		inputs = [""]; //default
      		update();
    	}
   		 else if(this.id === "total") {
      		getTotal();
    	}
		else{
			 if (inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".") === -1) {
					getValue(this.id);
         	}
			else{
				getValue(this.id);
			}
		}
	});

	});// documnet