/*const questions =[
    {
        question:"which cricket player is also known as THALA?",
        answers:[
        
          {text:"VIRAT KOHLI",correct:false},
          {text:"ROHIT SHARMA",correct:false},
          {text:"HARDIK PANDYA",correct:false},
           {text:"MS DHONI",correct:true},
        ]


        
    },
    {
        question:"which of these below options is the slowest vehicle?",
        answers:[
        
          {text:"SCOOTY",correct:false},
          {text:"BIKE",correct:false},
          {text:"CYCLE",correct:true},
           {text:"CAR",correct:false},
        ]

    },
    {
        question:"which of these is the largest known country in terms of size?",
        answers:[
        
          {text:"INDIA",correct:false},
          {text:"RUSSIA",correct:false},
          {text:"USA",correct:true},
           {text:"BRAZIL",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="NEXT";
    showquestion();
}
function showquestion(){
    const currentQuestion=questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=`${questions}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer=> {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    });
}*/


const questions = [
    {
        question: "Which cricket player is also known as THALA?",
        answers: [
            { text: "VIRAT KOHLI", correct: false },
            { text: "ROHIT SHARMA", correct: false },
            { text: "HARDIK PANDYA", correct: false },
            { text: "MS DHONI", correct: true },
        ]
    },
    {
        question: "Which of these options is the slowest vehicle?",
        answers: [
            { text: "SCOOTY", correct: false },
            { text: "BIKE", correct: false },
            { text: "CYCLE", correct: true },
            { text: "CAR", correct: false },
        ]
    },
    {
        question: "Which of these is the largest known country in terms of size?",
        answers: [
            { text: "INDIA", correct: false },
            { text: "RUSSIA", correct: true },
            { text: "USA", correct: false },
            { text: "BRAZIL", correct: false },
        ]
    },
    {
        question: "Currently who is the prime minister of india?",
        answers: [
            { text: "NARENDRA MODI", correct: true},
            { text: "ARVIND KEJRIWAL", correct: false },
            { text: "RAHUL GANDHI", correct: false },
            { text: "MANMOHAN SINGH", correct: false },
        ]
        

    }, 
    {
        question: "2nd october is famous for_______?",
        answers: [
            { text: "INDEPENDENCE DAY", correct: false },
            { text: "GANDHI JAYANTI", correct: true },
            { text: "REPUBLIC DAY", correct: false },
            { text: "RAJIV GANDHI DIVAS", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    nextButton.style.display = "none"; // Hide next button initially
    showQuestion();
}

function showQuestion() {
    nextButton.style.display = "none"; // Hide the next button during question display
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    answerButton.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct; // Store correctness
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        button.disabled = true; 
        button.style.cursor = "default"; 
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Show the next button
}

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButton.innerHTML = ""; // Clear answers
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block"; // Show the next button
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Restart quiz
    }
});

// Initialize the quiz
startQuiz();


    

    /*const buttons = document.querySelectorAll("#answer-buttons .btn");
    buttons.forEach(button => button.disabled = true);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }, 1000);

    
    

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButton.innerHTML = "";
    nextButton.innerHTML = "RESTART";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();*/
