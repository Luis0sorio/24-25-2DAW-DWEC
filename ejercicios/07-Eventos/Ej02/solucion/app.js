// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    card.style.backgroundColor = '#ffcccb';
  });
  
  card.addEventListener('mouseout', function() {
    card.style.backgroundColor = '#f3f3f3';
  });
});
