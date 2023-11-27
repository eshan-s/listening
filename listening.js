var correctAnswers = [
  "let the games begin",
  "dog",
  "green",
  "what is your name",
  "what do you think you are doing"
];

function playAudioWithIndex(audioSource, buttonIndex) {
  var audioPlayer = document.getElementById('audioPlayer');
  var userInput = document.getElementById('userInput');

  userInput.value = '';

  audioPlayer.src = audioSource;
  audioPlayer.play();

  audioPlayer.setAttribute('data-correct-answer', correctAnswers[buttonIndex]);
}

function checkAnswer() {
  var userInput = document.getElementById('userInput').value.toLowerCase();
  var expectedAnswer = getExpectedAnswer();

  if (userInput === expectedAnswer) {
    alert('Correct!');
  } else {
    alert('Incorrect. Please try again.');
  }
}

function getExpectedAnswer() {
  var audioPlayer = document.getElementById('audioPlayer');
  var correctAnswer = audioPlayer.getAttribute('data-correct-answer');
  return correctAnswer;
}

function playAudio(audioSource, buttonIndex) {
  playAudioWithIndex(audioSource, buttonIndex);
}