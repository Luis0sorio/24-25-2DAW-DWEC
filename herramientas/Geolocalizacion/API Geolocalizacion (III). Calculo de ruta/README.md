
# Proyecto de Mapa con Cálculo de Rutas

Este documento explica en detalle el funcionamiento del mapa interactivo que muestra ubicaciones predefinidas y permite calcular rutas desde la ubicación del usuario hasta una de estas ubicaciones seleccionadas. Incluye explicaciones de las APIs utilizadas, métodos implementados y cada parte relevante del código.

---

## 1. Descripción General del Proyecto

El proyecto combina dos funcionalidades principales:
1. **Visualización de mapas interactivos** utilizando OpenStreetMap.
2. **Cálculo de rutas** entre dos puntos (ubicación del usuario y ubicaciones predefinidas) utilizando OpenRouteService.

El mapa permite:
- Visualizar lugares icónicos marcados en un mapa interactivo.
- Hacer clic en un marcador para generar una ruta desde la ubicación actual del usuario.
- Mostrar información sobre la ruta, como:
  - **Distancia total.**
  - **Duración estimada del viaje.**

---

## 2. APIs Utilizadas

### **2.1 OpenStreetMap**
- **¿Qué hace?**
  - Proporciona los mapas base que se visualizan en pantalla (calles, carreteras, ciudades, etc.).
  - Permite agregar marcadores y otros elementos visuales.

- **¿Por qué se usa?**
  - Es gratuito, fácil de integrar y personalizable.
  - Proporciona mapas detallados de todo el mundo.

- **Limitaciones**:
  - No incluye cálculos de rutas ni direcciones.

---

### **2.2 OpenRouteService**
- **¿Qué hace?**
  - Calcula rutas entre dos puntos geográficos (inicio y destino).
  - Proporciona:
    - Coordenadas de la ruta.
    - Distancia total.
    - Duración estimada.
    - Información sobre el tipo de transporte (automóvil, bicicleta, caminata, etc.).

- **¿Por qué se usa?**
  - Permite calcular rutas y obtener detalles avanzados (como tiempo y distancia).
  - Compatible con OpenStreetMap.

- **Limitaciones**:
  - No genera mapas visuales, solo proporciona datos.
  - Tiene un límite de solicitudes en el plan gratuito (2,000 solicitudes diarias para direcciones).

---

## 3. Implementación Técnica

### **3.1 Estructura del Proyecto**

- **HTML**:
  - Define el contenedor del mapa (`<div id="map">`) y un cuadro de información para mostrar detalles de la ruta.
- **CSS**:
  - Estiliza el mapa y el cuadro de información.
- **JavaScript**:
  - Integra las APIs, configura el mapa, y maneja eventos de usuario (como clics en marcadores).

---

## 4. Explicación del Código

1. **Configuración del Mapa**:
   - `L.map('map')`: Crea el contenedor del mapa.
   - `L.tileLayer`: Añade el fondo del mapa desde OpenStreetMap.

2. **Marcadores**:
   - `L.marker`: Añade un marcador en una ubicación del array `locations`.

3. **Cálculo de Rutas**:
   - `fetch`: Realiza una solicitud a la API de OpenRouteService con la ubicación del usuario como inicio y la ubicación seleccionada como destino.
   - La respuesta de la API incluye:
     - Coordenadas para dibujar la ruta.
     - Distancia y duración estimada.

4. **Dibujo de la Ruta**:
   - `L.polyline`: Dibuja la ruta en el mapa.
   - `map.fitBounds`: Ajusta el zoom para mostrar toda la ruta.

5. **Errores y Validaciones**:
   - Verifica si la clave API está configurada.
   - Muestra mensajes de error si algo falla (por ejemplo, problemas con la geolocalización o la API).

---

## 5. Recursos Utilizados

1. **[Leaflet.js](https://leafletjs.com/)**:
   - Biblioteca JavaScript para crear mapas interactivos.

2. **[OpenRouteService API](https://openrouteservice.org/)**:
   - Servicio para calcular rutas entre puntos.

3. **[OpenStreetMap](https://www.openstreetmap.org/)**:
   - Fuente gratuita de mapas base.

---

