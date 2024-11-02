// Solución
const targetCard = document.querySelectorAll('.card')[1];

document.addEventListener('keydown', function(event) {
  if (event.key === 'h') {
    targetCard.style.border = '3px solid red';
  }
});
