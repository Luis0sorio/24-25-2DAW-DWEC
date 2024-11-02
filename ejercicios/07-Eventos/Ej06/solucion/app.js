// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.style.transform = 'scale(1.2)';
  });

  card.addEventListener('dblclick', function() {
    card.style.transform = 'scale(1)';
  });
});
