const div = document.querySelector("div");

div.style.background = "Green";
div.style.padding = "5px";


function saludar() {
    alert("Hola! Soy el div.");
}
div.addEventListener("click", saludar);