let timerInterval;
let hours = 0,
  minutes = 0,
  seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  var audio = document.getElementById("audio");
  audio.play();
  audio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById("stop-button").addEventListener("click", function () {
  audio.pause(); // Pause the sound
});

function resetTimer() {
  stopTimer();
  hours = minutes = seconds = 0;
  updateTimer(--seconds);
}

document.getElementById("reset-button").addEventListener("click", function () {
  audio.pause(); // Pause the sound
});

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);
document.getElementById("reset-button").addEventListener("click", resetTimer);
