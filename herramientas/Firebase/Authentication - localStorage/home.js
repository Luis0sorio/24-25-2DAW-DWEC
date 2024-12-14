import { ManageAccount } from './app.js';

const account = new ManageAccount();

// Elementos del DOM
const loadingDiv = document.getElementById("loading");
const homeContainer = document.getElementById("home-container");

// Comprobar autenticación antes de mostrar contenido
const user = account.checkAuth();

if (user) {
    // Si el usuario está autenticado, muestra el contenido
    console.log("Usuario autenticado:", user);

    // Los estudiantes pueden decidir qué propiedad del usuario usar
    document.getElementById("user-email").textContent = `Hola, ${user.email}`;
    loadingDiv.style.display = "none"; // Ocultar el mensaje de carga
    homeContainer.style.display = "block"; // Mostrar el contenido principal
} else {
    console.log("Redirigiendo al login...");
}

// Manejar cierre de sesión
document.getElementById("cerrar-sesion").addEventListener("click", () => {
    account.signOut();
});
