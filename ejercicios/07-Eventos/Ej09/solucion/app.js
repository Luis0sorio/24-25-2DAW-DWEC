// Solución
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('dblclick', function() {
    const popup = card.querySelector('.popup');
    popup.style.opacity = 1;
    setTimeout(function() {
      popup.style.opacity = 0;
    }, 1500);
  });
});
