const measurement = document.querySelector('#select-measurement');
const backWallDistance = document.querySelector('.listening-position-distance');
const sideWallDistance = document.querySelector('.right-speaker-sidewall-distance');
const leftWallDistance = document.querySelector('.left-speaker-sidewall-distance');
const frontWallDistance = document.querySelector('.speaker-frontwall-distance');
const displayWidth = document.querySelector('.rear-wall-dimension');
const displayLength = document.querySelector('.left-wall-dimension');
const alertNegitive = document.querySelector('.negitiveValue');
const submitButton = document.querySelector('#submit-button');
const length = document.getElementById('room-length');
const width = document.getElementById('room-width');
const clearButton = document.querySelector('#clear-button');
var CSSVariables = document.querySelector(':root');

const rearWallMulti = .447;
const sideWallMulti = .276;

length.value = '0';
width.value = '0';

submitButton.addEventListener("click", function(){
  // Set HTML text and values
  if(width.value <= '0' || length.value <= '0') {
    alertNegitive.classList.add('show');

  } else {
  displayLength.innerText = length.value + ' ' + measurement.value;

  displayWidth.innerText = width.value + ' ' + measurement.value;

  frontWallDistance.innerText = rearWallMulti * length.value + ' ' + measurement.value; 

  leftWallDistance.innerText = sideWallMulti * length.value + ' ' + measurement.value; 

  sideWallDistance.innerText = rearWallMulti * width.value + ' ' + measurement.value; 

  backWallDistance.innerText = sideWallMulti * width.value + ' ' + measurement.value; 

  CSSVariables.style.setProperty('--room-length', length.value + 'px');
  }

  // Set CSS variables
  

  // Don't refreh the page on Submit
  event.preventDefault();
});

clearButton.addEventListener("click", (e)=> {
 e.preventDefault(); 
 alertNegitive.classList.remove('show');
 length.value = '0';
  width.value = '0';
})