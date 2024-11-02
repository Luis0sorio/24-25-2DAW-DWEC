const cards = document.querySelectorAll('.card');

// Cambiar color de fondo al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  cards.forEach(function(card) {
    card.style.backgroundColor = '#E0FFFF';
  });
});

// Cambiar el texto al hacer clic en una tarjeta
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.textContent = '¡Seleccionada!';
  });

  // Cambiar el color de texto cuando la tarjeta tiene foco
  card.addEventListener('focus', function() {
    card.style.color = '#FF6347';
  });

  // Restaurar color de texto al perder el foco
  card.addEventListener('blur', function() {
    card.style.color = '#333';
  });
});

// Cambiar el tamaño de la tarjeta al hacer scroll
window.addEventListener('scroll', function() {
  cards.forEach(function(card) {
    card.style.fontSize = `${16 + window.scrollY / 100}px`;
  });
});
