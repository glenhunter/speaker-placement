const frontWallDistance = document.querySelector('.speaker-frontwall-distance');
const submitButton = document.querySelector('#submit-button');
const length = document.getElementById('room-length');
const width = document.getElementById('room-width');


submitButton.addEventListener("click", function(){
  frontWallDistance.innerText = length.value;
  alert(length.value);
  event.preventDefault();
});
