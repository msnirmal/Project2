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
const quizArea = document.getElementById('quiz-area');
const quizImages = document.getElementById('quiz-images');

let currentIndex = 0
let score = 0
launchQuiz()

function launchQuiz() {
    quizImages.src = animalImages[currentIndex].Image;
    userGuess.ariaValueText= "";
    }

    function checkAnswer() {      
        const userGuess = document.getElementById("guess").value.toLowerCase();
        const correctAnswer = animalImages[currentIndex].correct.toLowerCase();   
        if (userGuess === correctAnswer) {
          score++;
          document.getElementById("score").textContent = `Score: ${score}/${qImages.length}`;
          document.getElementById("answer-result").textContent = "That was correct!";
          currentIndex++;
          } else {
          document.getElementById("answer-result").textContent = "Incorrect.";
          }
        }
        showquiz();
        document.getElementById("score").textContent = `Score: ${score}`;




