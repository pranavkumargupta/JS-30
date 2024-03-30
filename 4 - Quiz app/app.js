const questions = [
    {
        question: "Which is the Largest Animal in the World?",
        answer: [
            {text : "Shark", correct: false},
            {text : "Blue Whale", correct: true},
            {text : "Elephant", correct: false},
            {text : "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the Smallest Country in the World?",
        answer: [
            {text : "Vatican city", correct: true},
            {text : "Bhutan", correct: false},
            {text : "Nepal", correct: false},
            {text : "Sri Lanka", correct: false}
        ]
    },
    {
        question: "Which is the Largest Dessert in the World?",
        answer: [
            {text : "Kalahari", correct: false},
            {text : "Gobi", correct: false},
            {text : "Sahara", correct: false},
            {text : "Antarctica", correct: true}
        ]
    },
    {
        question: "Which is the Smallest Continent in the World?",
        answer: [
            {text : "Asia", correct: false},
            {text : "Australia", correct: true},
            {text : "Arctic", correct: false},
            {text : "Africa", correct: false}
        ]
    },
];

const questionElement = document.getElementById("question");
const optionButtons = document.getElementById("options-btn");
const nextButtonElement = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButtonElement.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add('btn');
        optionButtons.appendChild(button);
    })
}
// startQuiz();

function resetState(){
    nextButtonElement.style.display = "none";
    while(optionButtons)
}
