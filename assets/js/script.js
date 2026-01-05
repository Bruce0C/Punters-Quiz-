/*
Questions
All questions were taken from https://paulcooper.uk/2021/01/01/100-pub-quiz-trivia-questions-part-1/
Questions were randomly selected between part one and part twelsve of the site
 */
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
            text: "Lion",
            correct: false
        }, {
            text: "Capybara",
            correct: false
        }, {
            text: "Goat",
            correct: false
        }, {
            text: "Horse",
            correct: true
        }, ]
    },
    {
        question: 'Which Chilean island is famous for its giant stone figures?',
        answers: [{
            text: "Easter Island",
            correct: true
        }, {
            text: "Bear Island",
            correct: false
        }, {
            text: "Bermuda",
            correct: false
        }, {
            text: "Tahiti",
            correct: false
        }, ]
    },
    {
        question: "What was the name of Dr Who's dog?",
        answers: [{
            text: "R2-D2",
            correct: false
        }, {
            text: "C-3PO",
            correct: false
        }, {
            text: "K9",
            correct: true
        }, {
            text: "Alexa",
            correct: false
        }, ]
    },
    {
        question: 'Which Italian term means "In The Open Air"?',
        answers: [{
            text: "Chi Non Fa, Non Fella",
            correct: false
        }, {
            text: "Chi dorme non pigilia pesci",
            correct: false
        }, {
            text: "Alfresco",
            correct: true
        }, {
            text: "Che Bello",
            correct: false
        }, ]
    },
    {
        question: 'What is the official residence of the Lord Mayor of London?',
        answers: [{
            text: "Mannor House",
            correct: false
        }, {
            text: "Mansion House",
            correct: true
        }, {
            text: "The White House",
            correct: false
        }, {
            text: "Big Ben",
            correct: false
        }, ]
    },
    {
        question: 'How many black keys are there on the a standard piano?',
        answers: [{
            text: "36",
            correct: true
        }, {
            text: "35",
            correct: false
        }, {
            text: "38",
            correct: false
        }, {
            text: "32",
            correct: false
        }, ]
    },
    {
        question: 'Where would you find the Ocean of Storms?',
        answers: [{
            text: "The Pasific",
            correct: false
        }, {
            text: "The Bermuda Triangle",
            correct: false
        }, {
            text: "Jupiter",
            correct: false
        }, {
            text: "The Moon",
            correct: true
        }, ]
    },
    {
        question: 'How many wings does a bee have?',
        answers: [{
            text: "4",
            correct: true
        }, {
            text: "2",
            correct: false
        }, {
            text: "6",
            correct: false
        }, {
            text: "8",
            correct: false
        }, ]
    },
    {
        question: 'Which Italian astronomer & physicist, b.1564, constructed telescopes & discovered the moons of Jupiter?',
        answers: [{
            text: "Mikelangelo",
            correct: false
        }, {
            text: "Galileo",
            correct: true
        }, {
            text: "Leonardo Da Vinci",
            correct: false
        }, {
            text: "Luigi",
            correct: false
        }, ]
    },
    {
        question: 'On which motorway would you find Watford Gap services?',
        answers: [{
            text: "M1",
            correct: true
        }, {
            text: "M25",
            correct: false
        }, {
            text: "M4",
            correct: false
        }, {
            text: "M3",
            correct: false
        }, ]
    },
    {
        question: 'In Shrek, who voices Donkey?',
        answers: [{
            text: "Morgan Freeman",
            correct: false
        }, {
            text: "Samuel L. Jackson",
            correct: false
        }, {
            text: "Aaron Pierre",
            correct: false
        }, {
            text: "Eddie Murphy",
            correct: true
        }, ]
    },
    {
        question: 'What is the name of Superman’s hometown on Earth?',
        answers: [{
            text: "Kent",
            correct: false
        }, {
            text: "Smallville",
            correct: true
        }, {
            text: "Krypton",
            correct: false
        }, {
            text: "Kansas",
            correct: false
        }, ]
    },
    {
        question: 'What is the 2nd largest planet in the solar system?',
        answers: [{
            text: "Jupiter",
            correct: false
        }, {
            text: "Mars",
            correct: false
        }, {
            text: "The Sun",
            correct: false
        }, {
            text: "Saturn",
            correct: true
        }, ]
    },
    {
        question: 'Which technology company owns the open smartphone operating system, Android?',
        answers: [{
            text: "Google",
            correct: true
        }, {
            text: "Apple",
            correct: false
        }, {
            text: "Microsoft",
            correct: false
        }, {
            text: "Nvidia",
            correct: false
        }, ]
    },
    {
        question: 'Which adventure film series was set in the town of Hill Valley?',
        answers: [{
            text: "Jumanji",
            correct: false
        }, {
            text: "Lord of The Rings",
            correct: false
        }, {
            text: "Back to the Future",
            correct: true
        }, {
            text: "Sonic",
            correct: false
        }, ]
    },
    {
        question: 'Which animated character has a dog called Gromit?',
        answers: [{
            text: "Wallace",
            correct: true
        }, {
            text: "Shaggy",
            correct: false
        }, {
            text: "Carl Fredrickson",
            correct: false
        }, {
            text: "Sinbad",
            correct: false
        }, ]
    },
    {
        question: 'In rugby union, what position does the player wearing number two play?',
        answers: [{
            text: "Fly-half",
            correct: false
        }, {
            text: "Hooker",
            correct: true
        }, {
            text: "Loose-head prop",
            correct: false
        }, {
            text: "Fullback",
            correct: false
        }, ]
    },
    {
        question: 'Who was the author of "The Secret Diary Of Adriam Mole"?',
        answers: [{
            text: "Sue Townsend",
            correct: true
        }, {
            text: "William Shakespear",
            correct: false
        }, {
            text: "Jane Austin",
            correct: false
        }, {
            text: "Dr. Seus",
            correct: false
        }, ]
    }
];

//Constants 
const questionElement = document.getElementById('question');
const answersButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const progressBarFill = document.getElementById('progress-bar-fill');
const maxQuestions = 20;

let currentQuestionIndex = 0;
let score = 0;

//This function will initiate the quiz
function startQuiz() {
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
    questionElement.innerHTML = `Final Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

//Show next button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
    //Show "Finish button"
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Finish";
    }
}

/*
 Move to the next question from current question
 If there are no more questions, restart the quiz by calling startQuiz
 */
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();