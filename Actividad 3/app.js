// app.js
/*
Al hacer clic en Agregar al final, crear un <li> con el texto del input y añadirlo al final de la lista 
Al hacer clic en Agregar al inicio, agregar un <li> al inicio de la lista 
Cada <li> debe tener un botón ❌ que elimine esa tarea con
Si el input está vacío, no se agrega nada.
Cada <li> debe incluir también un botón ✔ que marque/desmarque la tarea como completada (classList.toggle("completado")).
Al añadir una tarea, si contiene la palabra “importante”, agregarle la clase .prioridad.
Mostrar en consola cuántas tareas hay en la lista cada vez que se agregue o elimine una.
Al hacer clic en Vaciar lista, eliminar todos los <li> de una vez.
Asignar un data-id único a cada <li> usando un contador en JS.
*/

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nuevaTarea");
  const lista = document.getElementById("lista");
  const btnFinal = document.getElementById("btnFinal");
  const btnInicio = document.getElementById("btnInicio");
  const btnVaciar = document.getElementById("btnVaciar");

  let contador = 1;

  // Función para crear una tarea
  function crearTarea(texto, alInicio = false) {
    if (texto.trim() === "") return;

    // 1) Crear el <li> y asignar data-id
    const li = document.createElement("li");
    li.dataset.id = contador++;
    li.textContent = texto;

    // 2) Si la tarea contiene "importante", agregar clase .prioridad
    if (texto.toLowerCase().includes("importante")) {
      li.classList.add("prioridad");
    }

    // 3) Botón eliminar
    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "✔";
    btnCompletar.addEventListener("click", (e) => {
      e.stopPropagation(); // evitar que se dispare el click del li
      li.classList.toggle("completado");
    });

    // 4) Botón completar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.addEventListener("click", (e) => {
      e.stopPropagation(); // evitar alert del li
      li.remove();
      contarTareas(); // actualizar contador
    });

    // 5) Click en el texto muestra alert con data-id + texto
    li.addEventListener("click", () => {
      alert(`ID: ${li.dataset.id}\nTarea: ${texto}`);
    });

    // 6) Insertar botones en el li
    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);

    // 7) Insertar en lista (final o inicio)
    if (alInicio) {
      lista.prepend(li);
    } else {
      lista.appendChild(li);
    }

    // 8) Limpiar input
    input.value = "";

    // 9) Mostrar cuántas tareas hay
    contarTareas();
  }

  // Función para vaciar tareas tareas
  function vaciarTareas() {
    lista.innerHTML = "";
        contarTareas();
  }

  // Función para contar tareas
  function contarTareas() {
        console.log(`Tareas en lista: ${lista.children.length}`);
  }

  // Botón agregar al final
  btnFinal.addEventListener("click", () => {
    crearTarea(input.value, false);
  });

  // Botón agregar al inicio
  btnInicio.addEventListener("click", () => {
    crearTarea(input.value, true);
  });

  // Botón vaciar lista
  btnVaciar.addEventListener("click", () => {
    vaciarTareas();
  });
});
