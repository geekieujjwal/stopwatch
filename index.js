const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

start.addEventListener("click", () => {
  start.style.cursor = "none";
  start.disabled = true;
  const secondInterval = setInterval(() => {
    if (second.textContent == 59) {
      second.textContent = "00";
      minute.textContent = +minute.textContent + 1;
    } else {
      second.textContent = +second.textContent + 1;
    }
  }, 1000);

  const hourInterval = setInterval(() => {
    if (minute.textContent == 59) {
      hour.textContent = +hour.textContent + 1;
    }
  }, 60000);

  stop.addEventListener("click", () => {
    start.style.cursor = "pointer";
    start.disabled = false;
    clearInterval(secondInterval);
    clearInterval(hourInterval);
  });

  reset.addEventListener("click", () => {
    start.style.cursor = "pointer";
    start.disabled = false;
    second.textContent = minute.textContent = hour.textContent = "00";
    clearInterval(secondInterval);
    clearInterval(hourInterval);
  });
});
