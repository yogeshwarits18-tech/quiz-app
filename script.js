// 1. QUESTIONS: edit these to your own topic
const questions = [
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: 1            // index of correct option (0,1,2,3)
    },
    {
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<head>", "<h1>", "<heading>"],
        answer: 2
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        options: ["var", "const", "let", "int"],
        answer: 1
    },
    {
        question: "What does DOM stand for?",
        options: ["Data Object Model", "Document Object Model", "Display Output Mode", "Digital Order Map"],
        answer: 1
    },
    {
        question: "Which CSS property makes a Flexbox container?",
        options: ["display: flex", "flex: display", "position: flex", "align: flex"],
        answer: 0
    }
];

const TOTAL_TIME = 60;   // seconds for the whole test

// 2. VARIABLES
let currentIndex = 0;
let userAnswers = new Array(questions.length).fill(null); // stores chosen option
let timeLeft = TOTAL_TIME;
let timerId;

// 3. GET HTML ELEMENTS
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const countEl = document.getElementById("question-count");
const timerEl = document.getElementById("timer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const scoreEl = document.getElementById("score");
const reviewEl = document.getElementById("review");
const restartBtn = document.getElementById("restart-btn");

// 4. SHOW A QUESTION
function showQuestion() {
    const q = questions[currentIndex];
    countEl.textContent = `Question ${currentIndex + 1}/${questions.length}`;
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((text, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = text;
        if (userAnswers[currentIndex] === i) div.classList.add("selected");
        div.addEventListener("click", () => selectOption(i));
        optionsEl.appendChild(div);
    });

    // Disable Previous on first, Next on last
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questions.length - 1;
}

// 5. SAVE THE SELECTED ANSWER
function selectOption(i) {
    userAnswers[currentIndex] = i;
    showQuestion();   // redraw to highlight choice
}

// 6. NEXT / PREVIOUS
nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
});

// 7. TIMER
function startTimer() {
    timeLeft = TOTAL_TIME;
    timerEl.textContent = `Time: ${timeLeft}s`;
    timerId = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            finishQuiz();   // auto-submit when time ends
        }
    }, 1000);
}

// 8. FINISH: calculate score + show review
function finishQuiz() {
    clearInterval(timerId);
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    let score = 0;
    reviewEl.innerHTML = "";

    questions.forEach((q, i) => {
        const chosen = userAnswers[i];
        const isCorrect = chosen === q.answer;
        if (isCorrect) score++;

        const item = document.createElement("div");
        item.className = "review-item " + (isCorrect ? "correct" : "wrong");
        item.innerHTML = `
      <strong>Q${i + 1}. ${q.question}</strong><br>
      Your answer: ${chosen === null ? "Not answered" : q.options[chosen]}<br>
      Correct answer: ${q.options[q.answer]}
    `;
        reviewEl.appendChild(item);
    });

    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

submitBtn.addEventListener("click", finishQuiz);

// 9. RESTART
restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    showQuestion();
    startTimer();
});

// 10. START THE APP
showQuestion();
startTimer();