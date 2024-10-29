# Otros Eventos de Interacción General
- **error**: Se activa cuando ocurre un error de carga en algún elemento, como una imagen.

Ejemplo: 

```javascript
img.addEventListener("error", function() { 
    /* acción */ 
    });
```

- **copy**: Ocurre cuando el usuario copia contenido.

Ejemplo: 

```javascript
document.addEventListener("copy", function() { 
/* acción */ 
});
```

- **cut**: Se activa cuando el usuario corta contenido.

Ejemplo: 

```javascript
document.addEventListener("cut", function() { 
    /* acción */ 
    });
```

- **paste**: Ocurre cuando el usuario pega contenido.

Ejemplo: 

```javascript
document.addEventListener("paste", function() { 
/* acción */ 
});
```

- **animationstart**: Se activa cuando comienza una animación CSS.

Ejemplo: 

```javascript
element.addEventListener("animationstart", function() { 
    /* acción */ 
    });
```

- **animationend**: Ocurre cuando una animación CSS finaliza.

Ejemplo: 

```javascript
element.addEventListener("animationend", function() { 
/* acción */ 
});
```

- **transitionend**: Se activa cuando una transición CSS termina.

Ejemplo: 

```javascript
element.addEventListener("transitionend", function() { 
    /* acción */ 
    });
```

- **online**: Ocurre cuando el navegador detecta que se ha restablecido la conexión a internet.

Ejemplo: 

```javascript
window.addEventListener("online", function() { 
/* acción */ 
});
```

- **offline**: Se activa cuando el navegador detecta la pérdida de conexión.

Ejemplo: 

```javascript
window.addEventListener("offline", function() { 
    /* acción */ 
    });
```
