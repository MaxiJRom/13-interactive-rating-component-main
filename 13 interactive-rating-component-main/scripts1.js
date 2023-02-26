const submitButton = document.querySelector(".submit-button");

const puntaje = [];

let puntajeElegido;
let ultimaSeleccion;
let haySeleccion = false;

for (let i = 0; i <= 4; i++) {
    puntaje[i] = document.querySelector(`.list-item:nth-child(${i+1}`);

    puntaje[i].addEventListener("click", (e) => {
        
        puntajeElegido = e.target.innerHTML;

        if (haySeleccion) {
            ultimaSeleccion.classList.remove("list-item--active");
            ultimaSeleccion = e.target;

        } else {
            ultimaSeleccion = e.target;
            haySeleccion = true;
        }
        e.target.classList.add("list-item--active");
    
    })
    
}

export default puntajeElegido;

