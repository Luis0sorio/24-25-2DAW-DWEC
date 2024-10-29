# Eventos de pantalla táctil
Estos eventos se utilizan principalmente en dispositivos táctiles.

- **touchstart**: Se activa cuando uno o más dedos tocan la pantalla.

Ejemplo: 

```javascript
element.addEventListener("touchstart", function(event) { 
    /* acción */ 
});
```

- **touchmove**: Ocurre cuando se mueve el dedo en la pantalla.

Ejemplo: 

```javascript
element.addEventListener("touchmove", function(event) { 
    /* acción */ 
});
```

- **touchend**: Se activa cuando se retira el dedo de la pantalla.

Ejemplo: 

```javascript
element.addEventListener("touchend", function(event) { 
    /* acción */ 
});
```

- **touchcancel**: Ocurre cuando el sistema cancela la acción táctil (por ejemplo, al recibir una notificación).

Ejemplo: 

```javascript
element.addEventListener("touchcancel", function(event) { 
    /* acción */ 
});
```