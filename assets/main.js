var startButton = document.querySelector("#start");
var breakButton = document.querySelector("#break");
var stopButton = document.querySelector("#stop");
var hourTime = document.querySelector("#hour");
var minuteTime = document.querySelector("#minute");
var secondTime = document.querySelector("#seconds");
var back = document.querySelector("#back");
var forward = document.querySelector("#forward");
var forwardButton = document.querySelector("#button");
var okay = document.querySelector("#okay");
var resetButton = document.querySelector("#resetButton");
var hour = 0;
var minute = 0;
var second = 0;
var start_stop = true;
var okey_button = false;
var div = ``;
startButton.onclick = function () {
  var timer = setInterval(() => {
    if (start_stop == true) {
      clearInterval(timer);
    } else {
      second++;
      if (second < 10) {
        second = "0" + second;
        secondTime.innerHTML = second;
      }
      secondTime.innerHTML = second;
      if (second == 60) {
        minute++;
        second = 0;
        if (minute < 10) {
          minute = "0" + minute;
          minuteTime.innerHTML = minute;
        }
        minuteTime.innerHTML = minute;
      }
      if (minute == 60) {
        minute = 0;
        hour++;
        if (hour < 10) {
          hour = "0" + hour;
          hourTime.innerHTML = hour;
        }
        hourTime.innerHTML = hour;
      }

      console.log(start_stop);
    }
  }, 1000);
  if (start_stop) {
    document.getElementById("start").innerHTML = "Stop";
    start_stop = false;
    console.log("if");
  } else {
    document.getElementById("start").innerHTML = "Start";
    console.log("else");
    console.log(timer);
    start_stop = true;
  }
};
breakButton.onclick = function () {
  if (hour > 0 || minute > 0 || second > 0) {
    div += `
        <div>
              <span>${hour}&#58;&nbsp;</span>
              <span>${minute} &#58;&nbsp;</span>
              <span>${second}</span>
            </div>
        `;
    document.getElementById("result").innerHTML = div;
    breakButton.style.backgroundColor = "blue";
    setTimeout(function () {
      breakButton.style.backgroundColor = "rgb(119, 118, 118)";
    }, 100);
  }
};
back.onclick = function () {
  forwardButton.style.display = "none";
  document.getElementById("backButton").style.display = "block";
  document.getElementById("result").style.display = "none";
  resetTimer();
};
forward.onclick = function () {
  forwardButton.style.display = "flex";
  document.getElementById("backButton").style.display = "none";
  document.getElementById("result").style.display = "block";
  resetTimer();
};
okay.onclick = function () {
  okey_button = false;
  var hourTimer = document.getElementById("timer_hour").value;
  var minuteTimer = document.getElementById("timer_minute").value;
  var secondTimer = document.getElementById("timer_second").value;
  if (hourTimer > 0 || minuteTimer > 0 || secondTimer > 0) {
    var time = setInterval(function () {
      if (
        okey_button ||
        (hourTimer == 0 && minuteTimer == 0 && secondTimer == 0)
      ) {
        clearInterval(time);
        document.getElementById("seconds").innerHTML = "00";
        hourTime.innerHTML = "00";
        minuteTime.innerHTML = "00";
      } else {
        if (hourTimer > 0) {
          if ((minuteTimer == 0 && secondTimer == 0) || minuteTimer == 0) {
            minuteTimer = 60;
            hourTimer--;
          }
        }
        if (secondTimer == 0) {
          minuteTimer--;
          secondTimer = 60;
        }
        secondTimer--;
        secondTime.innerHTML = secondTimer;
        minuteTime.innerHTML = minuteTimer;
        hourTime.innerHTML = hourTimer;
      }
    }, 1000);
  }
  document.getElementById("timer_hour").value = 0;
  document.getElementById("timer_minute").value = 0;
  document.getElementById("timer_second").value = 0;
};
resetButton.onclick = resetTimer;
function resetTimer() {
  div = ``;
  hour = 0;
  minute = 0;
  second = 0;
  start_stop = true;
  okey_button = true;
  document.getElementById("result").innerHTML = "";
  document.getElementById("seconds").innerHTML = "00";
  hourTime.innerHTML = "00";
  minuteTime.innerHTML = "00";
}
