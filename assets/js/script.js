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
const userGuess = document.getElementById("guess").value.toLowerCase();
const correctAnswer = qImages[currentIndex].correct.toLowerCase();
const submitButton = document.getElementById('submit')

let currentIndex = 0
let score = 0
launchQuiz()

function launchQuiz() {
    quizImages.src = animalImages[currentIndex].Image
    userGuess.ariaValueText= ""
    }

    function checkAnswer() {         
        if (userGuess.value.toLowerCase(); === correctAnswer.correct.toLowerCase();) {
          score++;
          document.getElementById("score").textContent = `Score: ${score}/${qImages.length}`;
          document.getElementById("answer-result").textContent = "That was correct!";
          } else {
          document.getElementById("answer-result").textContent = "Incorrect.";
          }
        }
}



