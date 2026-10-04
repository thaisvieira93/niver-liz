const entrada = document.getElementById("entrada");
const site = document.getElementById("site");
const musica = document.getElementById("musica");

document.getElementById("abrir").addEventListener("click", function () {

    musica.play();

    entrada.style.opacity = "0";

    setTimeout(function () {

        entrada.style.display = "none";
        site.style.display = "block";

    }, 700);

});