const frontWallDistance = document.querySelector('.speaker-frontwall-distance');
const submitButton = document.querySelector('#submit-button');
const length = document.getElementById('room-length');
const width = document.getElementById('room-width');
var CSSVariables = document.querySelector(':root');

submitButton.addEventListener("click", function(){
  // Set HTML text and values
  frontWallDistance.innerText = length.value;

  // Set CSS variables
  CSSVariables.style.setProperty('--room-length', length.value + 'px');

  // Don't refreh the page on Submit
  event.preventDefault();
});
