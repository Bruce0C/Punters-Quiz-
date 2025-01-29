const questions = [{
        question: 'What is the Russian equivalent of an American astronaut?',
        answers: [{
            text: "Cosmonaut",
            correct: true
        }, {
            text: "Astronomer",
            correct: false
        }, {
            text: "Rocketeer",
            correct: false
        }, {
            text: "Skywalker",
            correct: false
        }, ]
    },
    {
        question: 'In which book would you find a Heffalump?',
        answers: [{
            text: "Of mice and men",
            correct: false
        }, {
            text: "Alice in Wonderland",
            correct: false
        }, {
            text: "Winnie The Pooh",
            correct: true
        }, {
            text: "Jack and the giant beanstaulk",
            correct: false
        }, ]
    },
    {
        question: 'The centaur is a mythological creature, part man and part what?',
        answers: [{
            text: "Black",
            correct: false
        }, {
            text: "Blue",
            correct: false
        }, {
            text: "Depends on the time-zone",
            correct: false
        }, {
            text: "Horse",
            correct: true
        }, ]
    }
    {
        question: 'Which Chilean island is famous for its giant stone figures?',
        answers: [{
            text: "Easter Island",
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
    {
        question: "What was the name of Dr Who's dog?",
        answers: [{
            text: "Black",
            correct: false
        }, {
            text: "Blue",
            correct: false
        }, {
            text: "K9",
            correct: true
        }, {
            text: "Baige",
            correct: false
        }, ]
    }
    {
        question: 'Which Italian term means "In The Open Air"?',
        answers: [{
            text: "Black",
            correct: false
        }, {
            text: "Blue",
            correct: false
        }, {
            text: "Alfresco",
            correct: true
        }, {
            text: "Baige",
            correct: false
        }, ]
    }
    {
        question: '...',
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
    nextButton.style.display = 'block';

}

function showScore() {
    resetState();
    questionElement.innerHTML = `Final Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
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