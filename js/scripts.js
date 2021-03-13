const measurement = document.querySelector('#select-measurement');
const backWallDistance = document.querySelector('.listening-position-distance');
const sideWallDistance = document.querySelector('.right-speaker-sidewall-distance');
const leftWallDistance = document.querySelector('.left-speaker-sidewall-distance');
const frontWallDistance = document.querySelector('.speaker-frontwall-distance');
const displayWidth = document.querySelector('.rear-wall-dimension');
const displayLength = document.querySelector('.left-wall-dimension');
const submitButton = document.querySelector('#submit-button');
const length = document.getElementById('room-length');
const width = document.getElementById('room-width');


submitButton.addEventListener("click", function(){
  displayLength.innerText = length.value + ' ' + measurement.value;
  event.preventDefault();
});
