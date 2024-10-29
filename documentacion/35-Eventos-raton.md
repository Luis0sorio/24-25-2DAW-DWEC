# Eventos de ratón
Estos eventos se generan cuando el usuario interactúa con el ratón.

- **click**: Ocurre cuando se hace clic en un elemento.

Ejemplo: 

```javascript
element.addEventListener("click", function() { 
    /* acción */
});
```

- **dblclick**: Se activa cuando el usuario hace doble clic.

Ejemplo: 

```javascript
element.addEventListener("dblclick", function() { 
    /* acción */
});
```

- **mousedown**: Se activa cuando el botón del ratón es presionado.

Ejemplo: 

```javascript
element.addEventListener("mousedown", function() { 
    /* acción */
});
```

- **mouseup**: Ocurre cuando se suelta el botón del ratón.

Ejemplo: 

```javascript
element.addEventListener("mouseup", function() { 
    /* acción */
});
```

- **mouseenter**: Se activa cuando el puntero entra en el área de un elemento.

Ejemplo: 

```javascript
element.addEventListener("mouseenter", function() { 
    /* acción */
});
```

- **mouseleave**: Ocurre cuando el puntero sale del área de un elemento.

Ejemplo: 

```javascript
element.addEventListener("mouseleave", function() { 
    /* acción */
});
```

- **mousemove**: Ocurre cuando el ratón se mueve sobre un elemento.

Ejemplo: 

```javascript
element.addEventListener("mousemove", function() { 
    /* acción */
});
```

- **mouseover**: Similar a mouseenter, pero se activa cada vez que el puntero pasa sobre el elemento o cualquier elemento hijo.

Ejemplo: 

```javascript
element.addEventListener("mouseover", function() { 
    /* acción */
});
```

- **mouseout**: Similar a mouseleave, pero se activa cada vez que el puntero sale del elemento o cualquiera de sus hijos.

Ejemplo: 

```javascript
element.addEventListener("mouseout", function() { 
    /* acción */
});
```

- **contextmenu**: Se activa al hacer clic derecho para abrir el menú contextual.

Ejemplo: 

```javascript
element.addEventListener("contextmenu", function(event) { event.preventDefault(); 
/* acción */});
```

- **wheel**: Se activa cuando la rueda del ratón se desplaza.

Ejemplo: 

```javascript
element.addEventListener("wheel", function(event) { 
    /* acción */
});
```