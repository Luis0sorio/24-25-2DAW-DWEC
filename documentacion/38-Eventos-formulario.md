# Eventos de Formulario
Estos eventos están relacionados con la interacción del usuario en formularios HTML.

- **submit**: Ocurre cuando se envía un formulario.

Ejemplo: 

```javascript
form.addEventListener("submit", function(event) { event.preventDefault(); 
/* acción */ });
```

- **reset**: Se activa cuando el formulario es restablecido.

Ejemplo: 

```javascript
form.addEventListener("reset", function() { 
    /* acción */ 
});
```

- **focus**: Ocurre cuando un elemento (como un campo de entrada) recibe el foco.

Ejemplo: 

```javascript
input.addEventListener("focus", function() { 
    /* acción */ 
});
```

- **blur**: Se activa cuando un elemento pierde el foco.

Ejemplo: 

```javascript
input.addEventListener("blur", function() { 
    /* acción */ 
});
```

- **change**: Ocurre cuando el valor de un elemento ha cambiado.

Ejemplo: 

```javascript
input.addEventListener("change", function() { 
    /* acción */ 
});
```

- **input**: Se activa cada vez que el valor de un campo de texto cambia.

Ejemplo: 

```javascript
input.addEventListener("input", function() { 
    /* acción */ 
});
```

