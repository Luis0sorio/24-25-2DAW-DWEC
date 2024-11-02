// Selecciona todas las tarjetas (cards) y el contenedor principal
const cards = document.querySelectorAll('.card');
const main = document.querySelector('main');

// Función para ocultar una tarjeta al hacer clic en ella
function hideCard(event) {
  event.target.style.display = 'none';
}

// Agrega el evento de clic a cada tarjeta para ocultarla al hacer clic
cards.forEach(function(card) {
  card.addEventListener('click', hideCard);
});

// Función para mostrar todas las tarjetas nuevamente
function showAllCards() {
  cards.forEach(function(card) {
    card.style.display = 'flex';
  });
};

// Agrega el evento de tecla presionada para mostrar todas las tarjetas
document.addEventListener('keydown', function(event) {
  if (event.key === 'r' || event.key === 'R') {
    showAllCards();
  }
});
