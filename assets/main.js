var startButton = document.querySelector("#start");
var breakButton = document.querySelector("#break");
var stopButton = document.querySelector("#stop");
var hourTime = document.querySelector("#hour");
var minuteTime = document.querySelector("#minute");
var secondTime = document.querySelector("#seconds");
var hour = 0;
var minute = 0;
var second = 0;
var start_stop = true;
var breakColor = false;
var div = ``;
startButton.onclick = function () {
  var timer = setInterval(() => {
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
  }, 10);
  if (start_stop) {
    document.getElementById("start").innerHTML = "Stop";
    start_stop = false;
    console.log("if");

  } else {
    clearInterval(timer);

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
