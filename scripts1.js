/* window.addEventListener("DOMContentLoaded", (event) => { */
// Grab HTML Elements

const submitButton = document.querySelector(".submit-button");

const anchor = document.getElementById("anchor");

const puntaje = [];

let puntajeElegido;
let ultimaSeleccion;
let haySeleccion = false;

for (let i = 0; i <= 4; i++) {
  puntaje[i] = document.querySelector(`.list-item:nth-child(${i + 1}`);

  puntaje[i].on("touchstart click", (e) => {
    /*     e.preventDefault();
     */
    puntajeElegido = e.target.innerHTML;

    if (haySeleccion) {
      ultimaSeleccion.classList.remove("list-item--active");
      ultimaSeleccion = e.target;
    } else {
      ultimaSeleccion = e.target;
      haySeleccion = true;
    }

    e.target.classList.add("list-item--active");
  });
}

submitButton.addEventListener("click", (e) => {
  if (haySeleccion) {
    localStorage.puntajeElegido = puntajeElegido;

    anchor.href = "./thank-you.html";
  } else {
    e.target.prevenDefault();
    anchor.href = "./index.html";
  }
});
/* }) */
