import { ManageAccount } from '../app.js';

const account = new ManageAccount();

document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Iniciando sesión con:", email);

    account.authenticate(email, password)
        .then(() => console.log("Redirigiendo a home.html"))
        .catch((error) => console.error("Error en la autenticación:", error));
});
