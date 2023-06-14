//** Array of animal images and correct answers */

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
    correct: "Horse"
    }, 
    {
    questionimage: "assets/images/imagefive.jpg",
    correct: "Panda"
    }, 
    {
    questionimage: "assets/images/imagesix.jpg",
    correct: "Zebra"
    }, 
    {
    questionimage: "assets/images/imageseven.jpg",
    correct: "Rhinoceros"
    }, 
    {
    questionimage: "assets/images/imageeight.jpg",
    correct: "Cow"
    }, 
    {
    questionimage: "assets/images/imagenine.jpg",
    correct: "Giraffe"
    }, 
    {
    questionimage: "assets/images/imageten.jpg",
    correct: "Monkey"
    }, 
    ];
  
  // Define variables   

  let currentIndex = 0;
  let score = 0;
  
  // Display the current riddle and reset the input field

  function showquiz() {
  document.getElementById("quiz-image").src = animalImages[currentIndex].questionimage;
  document.getElementById("guess").value = "";
  alert(instructions)
  }
  
  //** Validate user answer against correct answer and update score */

  function checkAnswer() {
  const userAnswer = document.getElementById("guess").value.toLowerCase();
  const correctAnswer = animalImages[currentIndex].correct.toLowerCase();
  if (userAnswer === correctAnswer) {
    score++; 
    document.getElementById('submit').disabled = true;
    document.getElementById("score").textContent = `You've scored : ${score} out of ${animalImages.length}`;
    document.getElementById("answer-result").textContent = "Yayy!! That's correct, click 'Next'";
    } else {
    document.getElementById('submit').disabled = true;
    document.getElementById("score").textContent = `You've scored : ${score} out of ${animalImages.length}`;
    document.getElementById("answer-result").textContent = "Oops!! That's incorrect, click 'Next'";
    } if (userAnswer === ""){
      document.getElementById("answer-result").textContent = "Enter your answer to score";
    } 
  }
  
  //** Function to load the next image/question */

  function nextImage() {
    currentIndex++;
    document.getElementById('submit').removeAttribute('disabled');
    document.getElementById("answer-result").textContent = "";
    if (currentIndex === animalImages.length) {
      document.getElementById("answer-result").textContent = "End of Quiz, click 'Reload'";
      document.getElementById('next').disabled = true;
    } else {
      showquiz();
    }
  }
  
  //** Function to reload quiz */
  function reloadQuiz(){
    window.location.reload();
    document.getElementById("score").textContent = "";
    document.getElementById("answer-result").textContent = "";

  }

  //** start the quiz */
  showquiz();
  

  