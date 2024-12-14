import { ManageAccount } from '../app.js';

const account = new ManageAccount();

document.getElementById("formulario-crear").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    account.register(email, password);
});
