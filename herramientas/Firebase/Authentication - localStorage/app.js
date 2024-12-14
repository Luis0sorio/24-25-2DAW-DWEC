// Importa Firebase desde el CDN
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Clase para gestionar cuentas
export class ManageAccount {
    async register(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario registrado:", userCredential.user);
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "login.html";
        } catch (error) {
            console.error("Error al registrar:", error.message);
            alert(`Error al registrar: ${error.message}`);
        }
    }

    async authenticate(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesión exitoso:", userCredential.user);

            // Guardar el objeto completo del usuario en localStorage
            localStorage.setItem("user", JSON.stringify(userCredential.user));

            alert("Has iniciado sesión correctamente.");
            window.location.href = "../home.html";
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            alert(`Error al iniciar sesión: ${error.message}`);
        }
    }

    checkAuth() {
        const userJson = localStorage.getItem("user");
        if (userJson) {
            // Retornar el objeto del usuario si existe en localStorage
            return JSON.parse(userJson);
        } else {
            // Usuario no autenticado
            console.log("Usuario no autenticado. Redirigiendo...");
            window.location.href = "auth/login.html";
            return null;
        }
    }

    async signOut() {
        try {
            await signOut(auth);

            // Limpiar el localStorage al cerrar sesión
            localStorage.removeItem("user");

            alert("Has cerrado sesión correctamente.");
            window.location.href = "auth/login.html";
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    }
}
