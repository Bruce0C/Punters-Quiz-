const question = [{
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
        },]
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
const answersButton = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButto.innerHTML = "Next" ;
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElemen.innerHTML = questionNo + ". " + currentQuestion
}
