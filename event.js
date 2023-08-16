const div = document.querySelector("div");
const boton = document.querySelector("button");

div.style.background = "Green";
div.style.padding = "5px";

const saludo = () => {
    alert("Hola!");
}
boton.addEventListener("click", saludo);
boton.removeEventListener("click", saludo);

function saludar() {
    alert("Hola! Soy el div.");
}
div.addEventListener("click", saludar);