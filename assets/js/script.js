const animalImages = [
    {
    questionimage: "assets/images/imageone.jpg",
    correct: "Elephant"
    }, 
    { 
    questionimage: "assets/images/imagetwo.jpg", 
    correct: "Lion"
    },
    {
    questionimage: "assets/images/imagethree.jpg",
    correct: "Tiger"
    },
    {
    questionimage: "assets/images/imagefour.jpg",
    correct: "Elephant"
    }, 
    {
    questionimage: "assets/images/imagefive.jpg",
    correct: "Elephant"
    }, 
    {
    questionimage: "assets/images/imagesix.jpg",
    correct: "Elephant"
    }, 
    {
    questionimage: "assets/images/imageseven.jpg",
    correct: "Elephant"
    }, 
    {
    questionimage: "assets/images/imageeight.jpg",
    correct: "Elephant"
    }, 
    {
    questionimage: "assets/images/imagenine.jpg",
    correct: "Elephant"
    }, 
    {
    questionimage: "assets/images/imageten.jpg",
    correct: "Elephant"
    }, 
    ] 
  
  // Define variables for the game
  let currentIndex = 0;
  let score = 0;
  
  // Display the current riddle and reset the input field
  function showquiz() {
  document.getElementById("quiz-image").src = animalImages[currentIndex].questionimage;
  document.getElementById("guess").value = "";
  }
  
  // Check the user's answer and update the score and hint
  function checkAnswer() {
  const userAnswer = document.getElementById("guess").value.toLowerCase();
  const correctAnswer = animalImages[currentIndex].correct.toLowerCase();
  if (userAnswer === correctAnswer) {
    score++; 
    document.getElementById("score").textContent = `Score: ${score}/${animalImages.length}`;
    document.getElementById("answer-result").textContent = "That was correct!";
    } else {
    document.getElementById("answer-result").textContent = "Incorrect.";
    }
  }
  
  function nextImage() {
    currentIndex++;
    document.getElementById("answer-result").textContent = "";
    if (currentIndex === animalImages.length) {
      alert("End of Game, refresh page to restart");
    } else {
      showquiz();
    }
  }
  
  function reloadQuiz(){
    window.location.reload();
  }
  
  // Initialize the game
  showquiz();
  document.getElementById("score").textContent = `Score: ${score}`;