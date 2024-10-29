# Eventos de teclado
Estos eventos responden a la interacción del usuario con el teclado.

- **keydown**: Ocurre cuando se presiona una tecla.

Ejemplo: 

```javascript
document.addEventListener("keydown", function(event) { 
    /* acción */ 
});
```

- **keypress**: Se activa cuando una tecla es presionada y mantenida (descontinuado en algunos navegadores).

Ejemplo: 

```javascript
document.addEventListener("keypress", function(event) { 
    /* acción */ 
});
```

- **keyup**: Ocurre cuando una tecla es soltada.

Ejemplo: 

```javascript
document.addEventListener("keyup", function(event) { 
    /* acción */ 
});
```
