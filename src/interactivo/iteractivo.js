import './interactivo.css';

const { createElement } = require("react");

const lista = document.querySelector("#proyectos");


const boton =  document.querySelector("#agregar");

boton.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "Nuevo proyecto";
    lista.append(item);

});

function cambioTema(){
    const boton = document.querySelector("#tema");

    const guardado = localStorage.getItem("tema");

    if(guardado === "oscuro"){
        document.body.classList.add("oscuro");
    }

    boton.addEventListener("click", () =>{
        document.body.classList.toggle("oscuro");
        const activo = document.body.classList.contains("oscuro");
        localStorage.setItem("tema", activo ?"oscuro":"claro");
    })
}
cambioTema();
