// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  const message = card.querySelector('.message');

  card.addEventListener('mouseover', function() {
    card.style.border = '2px solid #007BFF';
  });

  card.addEventListener('click', function() {
    message.style.opacity = 1;
    card.style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseout', function() {
    card.style.border = 'none';
    message.style.opacity = 0;
    card.style.transform = 'scale(1)';
  });
});
