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

  let calculatedValueFront = rearWallMulti * length.value; 

  let calculatedValueLeft = sideWallMulti * length.value;

  let calculatedValueSide = rearWallMulti * width.value;

  let calculatedValueBack = sideWallMulti * width.value; 


  CSSVariables.style.setProperty('--room-length', length.value + 'px');

   let roundedValueBack = calculatedValueBack.toFixed(2); 
   let roundedValueLeft = calculatedValueLeft.toFixed(2);
   let roundedValueSide = calculatedValueSide.toFixed(2);
   let roundedValueFront = calculatedValueFront.toFixed(2);
  

   backWallDistance.innerText = roundedValueBack + ' ' + measurement.value;
   sideWallDistance.innerText = roundedValueSide + ' ' + measurement.value;
   leftWallDistance.innerText = roundedValueLeft + ' ' + measurement.value;
   frontWallDistance.innerText = roundedValueFront + ' ' + measurement.value;
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