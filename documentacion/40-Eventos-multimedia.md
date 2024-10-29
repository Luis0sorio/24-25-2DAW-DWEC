# Eventos Multimedia
Estos eventos se relacionan con la reproducción de medios como video o audio.

- **play**: Ocurre cuando comienza la reproducción de un medio.

Ejemplo: 

```javascript
media.addEventListener("play", function() { 
    /* acción */ 
});
```

- **pause**: Se activa cuando la reproducción de un medio se pausa.

Ejemplo: 

```javascript
media.addEventListener("pause", function() { 
/* acción */ });
```

- **ended**: Ocurre cuando la reproducción de un medio termina.

Ejemplo: 

```javascript
media.addEventListener("ended", function() { 
    /* acción */ 
});
```

- **timeupdate**: Se activa periódicamente durante la reproducción, informando el tiempo actual.

Ejemplo: 

```javascript
media.addEventListener("timeupdate", function() { 
/* acción */ });
```

- **volumechange**: Ocurre cuando el volumen cambia.

Ejemplo: 

```javascript
media.addEventListener("volumechange", function() { 
    /* acción */ 
});
```- **
**