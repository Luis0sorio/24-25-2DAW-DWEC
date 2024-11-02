const cards = document.querySelectorAll('.card');

// Mostrar mensaje emergente al cargar la página
window.addEventListener('load', function() {
  alert('¡Bienvenido a la página!');
});

// Cambiar color de fondo de las tarjetas al redimensionar la ventana
window.addEventListener('resize', function() {
  cards.forEach(function(card) {
    card.style.backgroundColor = window.innerWidth < 600 ? '#ADD8E6' : '#f3f3f3';
  });
});

// Cambiar el color del texto al pasar el ratón sobre la tarjeta
cards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    card.style.color = '#4B0082';
  });

  card.addEventListener('mouseout', function() {
    card.style.color = '#333';
  });

  // Añadir clase con animación de borde cuando la tarjeta tiene foco
  card.addEventListener('focus', function() {
    card.classList.add('focused');
  });
});

// Eliminar borde pulsante al hacer clic fuera de las tarjetas
document.addEventListener('click', function(event) {
  if (!event.target.classList.contains('card')) {
    cards.forEach(function(card) {
      card.classList.remove('focused');
    });
  }
});
