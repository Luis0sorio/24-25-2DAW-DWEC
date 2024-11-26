
function inicio(url) {
    const xhr = new XMLHttpRequest();

    // Referencias al DOM
    const progressBar = document.getElementById("progress-bar");
    const estadoList = document.getElementById("estado-list");
    const newsContainer = document.getElementById("noticias");

    // Configurar la solicitud
    xhr.open("GET", url, true);
    xhr.responseType = "document";
    xhr.timeout = 10000; // Tiempo límite de 10 segundos

    // Agregar línea de estado
    function addEstadoLine(text) {
      const li = document.createElement("li");
      const now = new Date();
      const timestamp = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      li.textContent = `[${timestamp}] ${text}`;
      estadoList.appendChild(li);
    }

    // Manejo de readyState
    xhr.onreadystatechange = function () {
      switch (xhr.readyState) {
        case 0:
          addEstadoLine("Estado 0: No inicializado. La solicitud aún no se ha configurado.");
          break;
        case 1:
          addEstadoLine("Estado 1: Conexión establecida. Se ha llamado a open().");
          break;
        case 2:
          addEstadoLine("Estado 2: Solicitud recibida por el servidor.");
          break;
        case 3:
          addEstadoLine("Estado 3: Procesando datos del servidor.");
          break;
        case 4:
          addEstadoLine(`Estado 4: Completado. Código HTTP ${xhr.status} (${xhr.statusText}).`);
          break;
      }
    };

    // Manejo de progreso
    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        const percentage = ((event.loaded / event.total) * 100).toFixed(2);
        progressBar.style.width = percentage + "%";
        addEstadoLine(`Progreso de descarga: ${percentage}%`);
      } else {
        addEstadoLine("No se puede calcular el progreso.");
      }
    };

    // Manejo de timeout
    xhr.ontimeout = function () {
      addEstadoLine("La solicitud ha superado el tiempo límite.");
    };

    // Manejo de errores
    xhr.onerror = function () {
      addEstadoLine("Error de conexión: verifica tu conexión a internet.");
    };

    // Procesar la respuesta
    xhr.onload = function () {
      if (xhr.status === 200) {
        const xml = xhr.response;
        const items = xml.querySelectorAll("item");

        items.forEach((item) => {
          const title = item.querySelector("title")?.textContent || "Sin título";
          const description =
            item.querySelector("description")?.textContent || "Sin descripción";
          const link = item.querySelector("link")?.textContent || "#";
          const image = null; // Este RSS no tiene imágenes.

          // Crear tarjeta para cada noticia
          const card = document.createElement("div");
          card.className = "card";

          const cardContent = document.createElement("div");
          cardContent.className = "card-content";

          const cardTitle = document.createElement("h2");
          cardTitle.className = "card-title";
          cardTitle.textContent = title;

          const cardDescription = document.createElement("p");
          cardDescription.className = "card-description";
          cardDescription.textContent = description;

          const cardLink = document.createElement("div");
          cardLink.className = "card-link";
          const linkElement = document.createElement("a");
          linkElement.href = link;
          linkElement.target = "_blank";
          linkElement.textContent = "Leer más";
          cardLink.appendChild(linkElement);

          cardContent.appendChild(cardTitle);
          cardContent.appendChild(cardDescription);
          cardContent.appendChild(cardLink);
          card.appendChild(cardContent);
          newsContainer.appendChild(card);
        });

        // Ocultar barra de progreso
        progressBar.style.width = "0%";
      } else {
        addEstadoLine(`Error al procesar la solicitud: ${xhr.statusText}`);
      }
    };

    // Enviar la solicitud
    xhr.send();
  }

  // Llamar a la función con la URL del RSS
  inicio("https://www.espn.com/espn/rss/nba/news");
