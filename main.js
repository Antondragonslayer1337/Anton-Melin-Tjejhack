function check(){ /* Quizet*/
	var question1=document.quiz.question1.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
	var correct=0;

	if (question1 == "Monty Python") {
		correct++;
	}
	if (question2 == "Turtle") {
		correct++;
	}
	if (question3 == "Textprogrammering") {
		correct++;
	}

	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("number_correct").innerHTML="Du fick "+ correct + "/3 rätt.";
}