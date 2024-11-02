// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    if (card.style.transform === 'scale(1.3)') {
      card.style.transform = 'scale(1)';
    } else {
      card.style.transform = 'scale(1.3)';
    }
  });
});
