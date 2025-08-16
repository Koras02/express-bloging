let seconds = 0;
const timerElement = document.getElementById("timer");

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const secs = String(sec % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs} 초`;
}

timerElement.textContent = formatTime(seconds);

setInterval(() => {
  seconds++;
  timerElement.textContent = formatTime(seconds);
}, 1000);
