// app.js

/*
1
Cambiar texto (innerText):
Reemplaza el contenido de #site-title por Conferencia Web Costa Rica 2025.

2
Insertar HTML (innerHTML):
Agrega al final de #desc un <strong> ¡Entradas limitadas!</strong> (manteniendo lo existente).

3
Actualizar atributos de imagen:
En #hero-img, cambia src a https://via.placeholder.com/640x200?text=NEW+HERO y alt a Hero actualizado.

4
Habilitar y destacar CTA:
Quita disabled del botón #cta, agrega clase .primary y cambia su texto a ¡Quiero registrarme!.

5
Enlace externo seguro:
Lee (getAttribute) y escribe en consola el href de #ext-link, luego ponle target="_blank" y rel="noopener noreferrer".

6
Tags resaltados:
Recorre todas las .tag dentro de #tags y agrega la clase .resaltado solo a las que contengan el texto CSS o Accesibilidad.

7
Placeholder + required (form):
En #email, establece placeholder="tu@correo.com" y marca el campo como requerido (setAttribute("required","")).

8
Data attribute + estilo asociado:
Cambia data-state de #speaker-card a "active" para que se vea el outline verde.

9
Crear y anexar un badge:
Crea un <span class="badge">Nuevo</span> y añádelo a la derecha del h2.card-title dentro de #speaker-card.

10
Cambiar logo y alt:
Cambia src de #logo por https://via.placeholder.com/60x60?text=TEC y alt por Logo TEC.

11
Quitar el title del h1 (removeAttribute):
Elimina el atributo title de #site-title.
*/



document.addEventListener("DOMContentLoaded", () => {
    // Selección de nodos
    const title = document.querySelector("#site-title");
    const desc = document.querySelector("#desc");
     const cta = document.querySelector("#cta");
    const link = document.querySelector("#ext-link");
    const tags = document.querySelectorAll("#tags .tag");
    const email = document.querySelector("#email");
    const card = document.querySelector("#speaker-card");
    const h2Card = card.querySelector(".card-title");
    const logo = document.querySelector("#logo");

    // 1) Cambiar texto (innerText)
      title.innerText = "Conferencia Web Costa Rica 2025";


    // 2) Insertar HTML (innerHTML) al final de #desc
        desc.innerHTML += "<strong> ¡Entradas limitadas!</strong>";


    // 3) Actualizar atributos de imagen (src + alt)
        hero.src = "https://via.placeholder.com/640x200?text=NEW+HERO";
        hero.alt = "Hero actualizado";


    // 4) Habilitar y destacar CTA (removeAttribute, classList, innerText)
        cta.removeAttribute("disabled");
        cta.classList.add("primary");
        cta.innerText = "¡Quiero registrarme!";


    // 5) Enlace externo seguro: leer href y set target+rel
        console.log("Href actual:", link.getAttribute("href"));
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");


    // 6) Resaltar tags específicos (CSS o Accesibilidad)
       tags.forEach(tag => {
        if (tag.textContent === "CSS" || tag.textContent === "Accesibilidad") {
            tag.classList.add("resaltado");
        }
    });


    // 7) Placeholder + required en email
        email.setAttribute("placeholder", "tu@correo.com");
        email.setAttribute("required", "");


    // 8) data-state activo en la card (efecto visual con CSS)
        card.setAttribute("data-state", "active");


    // 9) Crear y anexar un badge a h2 (createElement + appendChild)
        const badge = document.createElement("span");
        badge.classList.add("badge");
        badge.textContent = "Nuevo";
        h2Card.appendChild(badge);


    // 10) Cambiar logo (src + alt)
        logo.src = "https://via.placeholder.com/60x60?text=TEC";
        logo.alt = "Logo TEC";


    // 11) Quitar atributo title del h1 (removeAttribute)
        title.removeAttribute("title");

});
