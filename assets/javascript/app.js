$(document).ready(function(){
	var questions = [
		{question: "What is the biggest species of shark?",
			correctAnswer: "Whale shark",
			answers: ["Basking shark",  "Great white shark", "Hammerhead shark", "Whale shark"],
			image: "assets/images/whale.gif"
		},
		{question: "What is the name for a baby horse?",
			correctAnswer: "Foal",
			answers: ["Cub", "Calf", "Foal", "Cygnet"],
			image: "assets/images/foal.gif"
		},
		{question: "A seahorse is a(n) _____.",
			correctAnswer: "Fish",
			answers: ["Crustacean", "Fish", "Mammal", "Arachnid"],
			image: "assets/images/seahorse.gif"
		},
		{question: "Which of these birds has the largest wingspan?",
			correctAnswer: "Albatross",
			answers: ["Albatross", "Stork", "Swan", "Condor"],
			image: "assets/images/albatross.gif"
		},
		{question: "What is the biggest animal that has ever lived?",
			correctAnswer: "Blue whale",
			answers: ["Spinosaurus", "African elephant", "Brontosaurus", "Blue whale"],
			image: "assets/images/bluewhale.gif"
		},
		{question: "Which is the fastest flying bird?",
			correctAnswer: "Peregrine falcon",
			answers: ["Peregrine falcon", "Harpy eagle", "Grey-headed albatross", "Common swift"],
			image: "assets/images/peregrine.gif"
		},	
		{question: "What are female elephants called?",
			correctAnswer: "Cows",
			answers: ["Mares", "Cows", "Sows", "Dames"],
			image: "assets/images/elephant.gif"
		},
		{question: "What is the fastest water animal?",
			correctAnswer: "Sailfish",
			answers: ["Sailfish", "Porpoise", "Marlin", "Barracuda"],
			image: "assets/images/sailfish.gif"
		},
		{question: "What is a group of frogs called?",
			correctAnswer: "Army",
			answers: ["Troop", "Herd", "Flock", "Army"],
			image: "assets/images/frogs.gif"
		},	
		{question: "Which of these mammals lays eggs?",
			correctAnswer: "Echidna",
			answers: ["Echidna", "Bongo", "Kiwi", "Southern right whale"],
			image: "assets/images/echidna.gif"
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
		intervalId = setInterval(decrement,1000);
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
		if(count > 9) {
			clearInterval(intervalId);
			$(".gameState").css("display", "none");
			$(".final").css("display", "inline");	
		$(".correct").html("correct: " + score.correct);
		$(".incorrect").html("incorrect: " + score.incorrect);
		$(".unanswered").html("unanswered " + (10-score.click));	
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
		// unanswered: (10 - click),
		click:0
		
	}

	function displayCorrect(){
		$(".correct").text("Correct!");
		$(".correctAnswer").text("The answer was: "+questions[count].correctAnswer);
		$(".img").attr("src", questions[count].image);
		$(".response").css("display", "inline");
		$(".gameState").css("display", "none");
	}

	function displayIncorrect(){
		$(".correct").text("Incorrect!");
		$(".correctAnswer").text("The correct answer was: "+questions[count].correctAnswer);
		$(".img").attr("src", questions[count].image);
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
			score.click++;
			console.log(this);
			clearInterval(intervalId);
			if(this.className === "correct"){
				console.log("bingo");
				score.correct++;
				displayCorrect();
				setTimeout(next,1000);
			} else if(this.className !== "correct") {
				console.log("no");
				score.incorrect++;
				displayIncorrect();
				setTimeout(next,1000);
			};
	
		});
	//unanswered count number of clicks subtracted from number of questions??
	});
	
});

