const animalImages = [
    {
        Image: "assets/images/imageone.jpg",
        correct: "Elephant"
    },
    {
        Image: "assets/images/imagetwo.jpg",
        correct: "Lion"
    },
    {
        Image: "assets/images/imagethree.jpg",
        correct: "Tiger" 
    }
]

//** Define variables for all DOM elements */
const quizArea = document.getElementById('quiz-area')
const heading = document.getElementById('heading')
const quizImages = document.getElementById('quiz-images')
const userGuess = document.getElementById('guess')
const submitButton = document.getElementById('submit')

let currentIndex = 0
let score = 0
launchQuiz()

function launchQuiz() {
    quizImages.src = animalImages[currentIndex].Image
    userGuess.ariaValueText= ""
    currentIndex++
    }



