// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('dblclick', function() {
    card.textContent = '¡Doble clic!';
  });

  card.addEventListener('click', function() {
    card.textContent = 'Card';
  });
});
