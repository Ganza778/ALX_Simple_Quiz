
 function checkAnswer() {
    var correctAnswer = "4";
   
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    
   
    if (userAnswer) {
        userAnswer = userAnswer.value;
        
        var feedbackElement = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
          
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        var feedbackElement = document.getElementById("feedback");
        feedbackElement.textContent = "Please select an answer.";
    }
}


window.onload = function() {
    var submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
};
