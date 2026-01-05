/* jshint esversion: 11 */

//Constants 
const questionElement = document.getElementById('question');
const answersButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const progressBarFill = document.getElementById('progress-bar-fill');
const maxQuestions = Math.min(questions.length, 10); //Set maximum number of questions to 10 or total number of questions available

let currentQuestionIndex = 0;
let score = 0;

//This function will initiate the quiz
function startQuiz() {
    questions.sort(() => Math.random() - 0.5); //Shuffle questions
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

/*
This function will display the question and its number
Code from Great stack's javascript turorial
 */
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.sort(() => Math.random() - 0.5); //Shuffle answers
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn');
        answersButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
    });

    /*
    Update the progress bar
    Code from James Q Quick "Build a Quiz App(6)" turorial
    */ 
    progressBarFill.style.width = `${(questionNo / maxQuestions) * 100}%`;
}

//Reveal answer button
function resetState() {
    nextButton.style.display = 'none';
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

/*
Turn button green or red when clicked
Code from Great stack's javascript turorial
*/
function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';

    //Add the correct or incorrect class to the clicked button
    if (isCorrect) {
        selectBtn.classList.add('correct');
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }

// Disable all answer buttons to prevent further clicks
Array.from(answersButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }

    // Disable button after click
    button.disabled = true;
});
    nextButton.style.display = "block";
}

/*
Reveal score and play again button
Code from Great stack's javascript turorial
 */
function showScore() {
    resetState();
    questionElement.innerHTML = `Final Score ${score} out of ${maxQuestions}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

//Show next button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestions) {
        showQuestion();
    } else {
        showScore();
    }
    //Show "Finish button"
    if (currentQuestionIndex === maxQuestions - 1) {
        nextButton.innerHTML = "Finish";
    }
}

/*
 Move to the next question from current question
 If there are no more questions, restart the quiz by calling startQuiz
 */
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < maxQuestions) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();