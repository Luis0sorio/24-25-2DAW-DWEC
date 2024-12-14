
# Ejemplo Firebase Authentication

A continuación, se explica detalladamente el contenido de cada fichero `.js` en este proyecto, con un enfoque especial en las funciones relacionadas con **Firebase Authentication**.

---

## **Ficheros utilizados**

Este proyecto implementa un sistema completo de autenticación con Firebase Authentication:
- **`app.js`**: Contiene la lógica central.
- **`register.js`**: Maneja el registro de usuarios.
- **`login.js`**: Maneja el inicio de sesión.
- **`home.js`**: Verifica la sesión y gestiona el cierre de sesión.

---

## **Archivo: `app.js`**

Este archivo contiene la configuración básica de Firebase y una clase llamada `ManageAccount` que centraliza las operaciones de autenticación, como registro, inicio de sesión, verificación de sesión y cierre de sesión, usando **localStorage** para manejar la persistencia del estado del usuario.

### Código: Configuración de Firebase
```javascript
import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    setPersistence, 
    browserLocalPersistence 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
```

1. **`initializeApp`**: Inicializa Firebase con la configuración de tu proyecto.
2. **`getAuth`**: Obtiene el servicio de autenticación de Firebase.
3. **`createUserWithEmailAndPassword`**: Registra un nuevo usuario con correo y contraseña.
4. **`signInWithEmailAndPassword`**: Permite iniciar sesión con correo y contraseña.
5. **`signOut`**: Cierra la sesión del usuario.

### Código: Configuración de la Clase `ManageAccount`
```javascript
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
}
```
- **`register`**: Registra un usuario en Firebase. Si el registro es exitoso, redirige al usuario a `login.html`.

```javascript
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
```
- **`authenticate`**: Inicia sesión con un correo y contraseña. Si tiene éxito:
    - Guarda el objeto completo del usuario autenticado en `localStorage`
    - Redirige al usuario a `home.html`.

---

```javascript
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

```
- **`checkAuth`**: Verifica si el usuario está autenticado en `localStorage`:
    - Si el usuario existe, retorna el objeto del usuario.
    - Si no lo está, lo redirige a `login.html`.

```javascript
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

```
- **`signOut`**: Cierra la sesión del usuario y lo redirige a `login.html`.

---

## **Archivo: `register.js`**

Este archivo gestiona el registro de usuarios.

### Código
```javascript
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
```

1. **`event.preventDefault()`**: Evita que el formulario se envíe automáticamente.
2. **Validación del Password**: Comprueba que la contraseña tenga al menos 6 caracteres.
3. **`account.register`**: Llama al método de la clase `ManageAccount` para registrar al usuario.

---

## **Archivo: `login.js`**

Este archivo gestiona el inicio de sesión.

### Código
```javascript
import { ManageAccount } from '../app.js';

const account = new ManageAccount();

document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    account.authenticate(email, password);
});
```

1. **`event.preventDefault()`**: Evita que el formulario recargue la página al enviarse.
2. **`account.authenticate`**: Llama al método `authenticate` para autenticar al usuario.

---

## **Archivo: `home.js`**

Este archivo verifica si el usuario está autenticado y maneja el cierre de sesión.

### Código
```javascript
import { ManageAccount } from './app.js';

const account = new ManageAccount();

const loadingDiv = document.getElementById("loading");
const homeContainer = document.getElementById("home-container");

account.checkAuth((user) => {
    if (user) {
        console.log("Usuario autenticado:", user.email);
        document.getElementById("user-email").textContent = `Hola, ${user.email}`;
        loadingDiv.style.display = "none";
        homeContainer.style.display = "block";
    }
});

document.getElementById("cerrar-sesion").addEventListener("click", () => {
    account.signOut();
});
```

1. **`checkAuth`**: Verifica si el usuario está autenticado. Si no lo está, redirige a `login.html`.
2. **Cargar Contenido**: Solo muestra el contenido de la página si el usuario está autenticado.
3. **`signOut`**: Cierra la sesión cuando el usuario hace clic en el botón.

---

