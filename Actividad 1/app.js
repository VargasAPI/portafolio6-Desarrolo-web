// 1) Obtén el título del sitio (h1) y muestra su texto en consola.
const titulo = document.getElementById("site-title")
console.log('1) ', titulo?.innerText);

// 2)Selecciona todos los enlaces del nav con la clase .btn.
const linksNav = querySelectorAll("nav a.btn")
console.log('2) ', linksNav);

// 3) Selecciona el primer enlace externo (el que tiene target="_blank").
const primerExterno = querySelector('a[target="_blank"]');
console.log('3) ', primerExterno);

// 4) Selecciona todas las tarjetas (.card) y luego el título de la tarjeta con id card-2.
const cards = document.querySelectorAll(".card");
const tituloCard2 = document.querySelector("#card-title");
console.log('4) ', cards, tituloCard2);

// 5) Selecciona el ítem de agenda que tiene data-role="speaker".
const itemSpeaker = document.querySelector('[data-role="speaker"]');
console.log('5) ', itemSpeaker);

// 6) Selecciona el botón con aria-label="marcar favorito".
const btnFavorito = document.querySelector('.btn-like');
console.log('6) ', btnFavorito);

// 7) Selecciona todos los <input> de tipo email (aunque solo haya uno).
const emails
console.log('7) ', emails);

// 8) Selecciona los ítems impares de .agenda-list (1, 3, …).
const impares
console.log('8) ', impares);

// 9) Selecciona la última .tag dentro de #card-1.
const ultimaTagCard1
console.log('9) ', ultimaTagCard1);

