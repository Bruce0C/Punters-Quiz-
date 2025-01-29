const questions = [{
        question: 'Will this code work after you push it?',
        answers: [{
            text: "Yes",
            correct: true
        }, {
            text: "Maybe",
            correct: false
        }, {
            text: "Highly doubt it",
            correct: false
        }, {
            text: "Ask the computer nicely",
            correct: false
        }, ]
    },
    {
        question: 'Did you fix any and all bugs before pushing this code?',
        answers: [{
            text: "Yes",
            correct: false
        }, {
            text: "Maybe",
            correct: false
        }, {
            text: "Highly doubt it",
            correct: true
        }, {
            text: "Ask the computer nicely",
            correct: false
        }, ]
    },
    {
        question: 'what colour is the sky?',
        answers: [{
            text: "Black",
            correct: true
        }, {
            text: "Blue",
            correct: false
        }, {
            text: "Depends on the time-zone",
            correct: false
        }, {
            text: "Baige",
            correct: false
        }, ]
    }
];
const questionElement = document.getElementById('question');
const answersButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn');
        answersButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer)
    });

}

function resetState() {
    nextButton.style.display = 'none';
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectBtn.classList.add('correct');
        score++;
    } else {
        selectBtn.classList.add('incorrect')
    }
    Array.from(answersButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();