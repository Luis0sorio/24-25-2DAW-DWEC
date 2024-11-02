// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    card.style.transform = 'rotateY(180deg)';
  });

  card.addEventListener('mouseout', function() {
    card.style.transform = 'rotateY(0deg)';
  });
});
