let addLap = document.querySelector(".lap-record");
let lapBtn = document.querySelector(".lap");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let displaytime = document.querySelector("#time");
let resetBtn = document.querySelector(".reset");

let flag;
let sec = 0;
let min = 0;
let hour = 0;
let timerInterval;
let countLap = 1;

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

lapBtn.addEventListener("click", () => {
  let seconds = sec;
  let minutes = min;
  let hours = hour;

  if (sec < 10) {
    seconds = sec;
  }

  if (min < 10) {
    minutes = min;
  }

  if (hour < 10) {
    hours = hour;
  }

  let div = document.createElement("div");
  div.setAttribute("class", "laps");
  div.innerHTML = `<span class='lap-list'>Lap ${countLap++}</span><span class='lap-list'>${hours}:${minutes}:${seconds}</span>`;
  addLap.appendChild(div);
});

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  stopBtn.style.display = "block";
  stopBtn.style.backgroundColor = "red";
  stopBtn.style.color = "white";

  flag = true;
  startWatch(flag);
});
stopBtn.addEventListener("click", () => {
  stopBtn.style.display = "none";
  startBtn.style.display = "block";
  startBtn.textContent = "Resume";
  flag = false;
  startWatch(flag);
});

function startWatch(flag) {
  console.log(flag);
  if (flag) timerInterval = setInterval(timer, 1000);
  else {
    clearInterval(timerInterval);
  }
}

function timer() {
  sec = parseInt(sec);
  min = parseInt(min);
  hour = parseInt(hour);
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hour++;
    min = 0;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  displaytime.innerText = hour + ":" + min + ":" + sec;
}
