$(document).ready(function () {
  let turnPan = 0;
  const sw1 = $(".slider1");

  sw1.click(function () {
    if (turnPan == 0) {
      document.documentElement.style.setProperty('--degree', '360deg');
    } else {
      document.documentElement.style.setProperty('--degree', '0deg');
    }
    turnPan = 1 - turnPan;
  });

  let turnLight = 0;
  const sw2 = $(".slider2");
  sw2.click(() => {
    if(turnLight == 0 ) lamp.src = "img/onLight.png";
    else lamp.src = "img/offLight.png";
    turnLight = 1 - turnLight;
  })
});


const circle = document.querySelector(".circle");
let speed = 5000;

let timer = setInterval(function () {
  speed = speed - 5;
  if (speed == 10) {
    speed = 10;
    clearInterval(timer);
  }
  document.documentElement.style.setProperty(`--spinSpeed`, `${speed}ms`);
}, 5);

