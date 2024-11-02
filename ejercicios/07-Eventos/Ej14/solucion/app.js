const cards = document.querySelectorAll('.card');

// Cambiar color de fondo al hacer clic
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.style.backgroundColor = '#FFD700';
  });
});

// Cambiar tamaño de las tarjetas al hacer scroll
window.addEventListener('scroll', function() {
  cards.forEach(function(card) {
    card.style.transform = `scale(${1 + window.scrollY / 1000})`;
  });
});

// Aplicar giro al redimensionar la ventana
window.addEventListener('resize', function() {
  cards.forEach(function(card) {
    card.style.transform = 'rotate(10deg)';
  });
  setTimeout(function() {
    cards.forEach(function(card) {
      card.style.transform = 'rotate(0deg)';
    });
  }, 500);
});

// Oscurecer las tarjetas al hacer doble clic
cards.forEach(function(card) {
  card.addEventListener('dblclick', function() {
    card.style.opacity = '0.5';
  });
});

// Restaurar al presionar 'r'
document.addEventListener('keydown', function(event) {
  if (event.key === 'r' || event.key === 'R') {
    cards.forEach(function(card) {
      card.style.backgroundColor = '#f3f3f3';
      card.style.transform = 'scale(1)';
      card.style.opacity = '1';
    });
  }
});
