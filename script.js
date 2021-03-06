//const variables//
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
const scoreElement = document.getElementById('score')

let score = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    questionElement.classList.remove('hide')
    scoreElement.classList.remove('hide')
    score = 0
    scoreElement.innerText = "Score: " + score
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    if(correct) {
        score++
        scoreElement.innerText = "Score: " + score
        console.log("wrong?")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




//add more questions
const question = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '9', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 4 + 4?',
        answers: [
            {text: '7', correct: false},
            {text: '6', correct: false},
            {text: '8', correct: true},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 1 + 2?',
        answers: [
            {text: '5', correct: false},
            {text: '3', correct: true},
            {text: '9', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 4 + 6?',
        answers: [
            {text: '10', correct: true},
            {text: '6', correct: false},
            {text: '9', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 10 + 2?',
        answers: [
            {text: '10', correct: false},
            {text: '6', correct: false},
            {text: '9', correct: false},
            {text: '12', correct: true}
        ]
    },
    {
        question: 'What is 6 + 6?',
        answers: [
            {text: '10', correct: false},
            {text: '12', correct: true},
            {text: '3', correct: false},
            {text: '15', correct: false}
        ]
    }
]
