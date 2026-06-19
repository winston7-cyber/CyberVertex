const botonTema = document.getElementById("cambiarTema");

botonTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {
        botonTema.textContent = "🌙 Modo Hacker";
    } else {
        botonTema.textContent = "☀️ Modo Claro";
    }
});
