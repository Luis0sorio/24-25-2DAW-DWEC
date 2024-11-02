// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.textContent = 'Clic hecho';
  });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 's') {
    cards.forEach(function(card) {
      card.textContent = 'Card';
    });
  }
});
