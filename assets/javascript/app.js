$(document).ready(function(){
	var questions = [
		{question: "What is the biggest species of shark?",
			correctAnswer: "Whale shark",
			answers: ["Whale shark",  "Great white shark", "Hammerhead shark", "Basking shark"]},

		{question: "What is the name for a baby horse?",
			correctAnswer: "Foal",
			answers: ["Foal", "Calf", "Cub", "Cygnet"]
		},
		{question: "A seahorse is a(n) _____.",
				correctAnswer: "Fish",
				answers: ["Fish", "Crustacean", "Mammal", "Arachnid"]
		},
		{question: "Which of these birds has the largest wingspan?",
			correctAnswer: "Albatross",
			answers: ["Albatross", "Stork", "Swan", "Condor"]
		},
		{question: "What is the biggest animal that has ever lived?",
			correctAnswer: "Blue whale",
			answers: ["Blue whale", "African elephant", "Brontosaurus", "Spinosaurus"]
		},
		{question: "Which is the fastest flying bird?",
			correctAnswer: "Peregrine falcon",
			answers: ["Peregrine falcon", "Harpy eagle", "Grey-headed albatross", "Common swift"]
		},	
		{question: "What are female elephants called?",
			correctAnswer: "Cows",
			answers: ["Cows", "Mares", "Sows", "Dames"]
		},
		{question: "What is the fastest water animal?",
			correctAnswer: "Sailfish",
			answers: ["Sailfish", "Porpoise", "Marlin", "Barracuda"]
		},
		{question: "What is a group of frogs called?",
			correctAnswer: "Army",
			answers: ["Army", "Herd", "Flock", "Troop"]
		},	
		{question: "Which of these mammals lays eggs?",
			correctAnswer: "Echidna",
			answers: ["Echidna", "Bongo", "Kiwi", "Southern right whale"]
		}				
	];
	// var correct = 0;
	// var incorrect = 0;
	// var unanswered = 0;
	var questionCount = 0;
	var number = 15;
	var intervalId;
	var count = 0;
	var questionUnanswered = true;

	function run() {
		intervalId = setInterval(decrement,300);
	};
	function decrement() {
		number--;
		$(".time").html(number);
		if (number === 0){
			number=16;
			count++;
			$(".answers").html("");
			displayQuestion();
		} 
		if(count === 9) {
			clearInterval(intervalId);
			$(".gameState").css("display", "none");
			$(".final").css("display", "inline");	
		$(".correct").html("correct: " + score.correct);
		$(".incorrect").html("incorrect: " + score.incorrect);
		$(".unanswered").html("unanswered " + score.unanswered);	
		}

	};
	function reset(){
		score.correct = 0;
		score.incorrect = 0;
		score.unanswered = 0;
		questionCount = 0;
		number = 15;
		intervalId;
		count = 0;
		$(".final").css("display", "none");
		$(".start").css("display", "inline");

	};


	// for(i = 0; i < questions.length; i++) {
	// 	console.log(questions[i].question);
	// 	console.log(questions[i].answers);
	// };
	function displayQuestion(){
			$(".question").html(questions[count].question);
		for(i=0; i<4 ; i++) {
			$(".answers").append("<li>" + questions[count].answers[i] + "</li>");
			if(questions[count].answers[i] === questions[count].correctAnswer){
				$("li").addClass("correct");
			}
		}	
	};

	var score = {
		correct: 0,
		incorrect: 0,
		unanswered: 0,
		questionUnanswered: true
	}

	function displayCorrect(){
		$(".correct").text("Correct!");
		$(".correctAnswer").text("The answer was: "+questions[count].correctAnswer);
		$(".response").css("display", "inline");
		$(".gameState").css("display", "none");
	}

	function displayIncorrect(){
		$(".correct").text("Incorrect!");
		$(".correctAnswer").text("The correct answer was: "+questions[count].correctAnswer);
		$(".response").css("display", "inline");
		$(".gameState").css("display", "none");
	}	

	function next(){
		setTimeout(function(){
			$(".response").css("display", "none");
			$(".gameState").css("display", "inline");
			run();
			number=16;
			count++
			$(".answers").html("");
			displayQuestion();	
			},1000);
	}

	$(".start").on("click",function(){
		console.log("hi");
		run();
		
		$(".start").css("display", "none");
		$(".gameState").css("display", "inline");
		displayQuestion();

		$(".reset").on("click",reset);

		$(document).on("click", "li", function(){
			console.log(this);
			clearInterval(intervalId);
			questionUnanswered = false;
			if(this.className === "correct"){
				console.log("bingo");
				score.correct++;
				displayCorrect();
				setTimeout(next,1000);
			} else {
				console.log("no");
				score.incorrect++;
				displayIncorrect();
				setTimeout(next,1000);
			};
			// count++;
			// $(".answers").html("");
			// displayQuestion();	
		});
		for (i=0; i<count.length; i++){
			if(questionUnanswered){
				unanswered++;
			}
		}		
	});
	
});

