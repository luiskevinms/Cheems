document.addEventListener("DOMContentLoaded", () => { 

    const randomNumber = Math.floor(Math.random() *14) + 1;

    // TODO: Eliminar antes de publicar el juego
    console.debug("Numero random:" + randomNumber);

    const imagenes = document.querySelectorAll(".cheems-card img");

    imagenes.forEach((img, index) => {
        const id = index +1;
        img.dataset.id = index +1;

        img.addEventListener("click", () => {
            if (id==randomNumber) {
                img.src = window.IMG_BAD;
                alert("Perdiste")
            } else {
                img.src = window.IMG_OK;
                //alert("Ganaste")
            }
        });

    })


});