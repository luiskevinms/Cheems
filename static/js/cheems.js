document.addEventListener("DOMContentLoaded", () => { 

    const randomNumber = Math.floor(Math.random() *14) + 1;

    // TODO: Eliminar antes de publicar el juego
    console.debug("Numero random:" + randomNumber);

    const imagenes = document.querySelectorAll(".cheems-card img");

    const clickCards = new Set();

    imagenes.forEach((img, index) => {
        const id = index +1;
        img.dataset.id = index +1;

        img.addEventListener("click", () => {
        
        if(!clickCards.has(id)){
        clickCards.add(id);


            if (id==randomNumber) {
                imagenes.forEach((img2, index2) => {
                    img2.src = window.IMG_OK; 
                })
                img.src = window.IMG_BAD;
                //alert("Perdiste")


            } else {
                img.src = window.IMG_OK;

                if(clickCards.size === 14){
                    const modal = new bootstrap.Modal(document.getElementById("modal-winner"));
                    modal.show();      
                    //alert("Ya ganaste el juego")
                }
                
            }
        }
        });

    

    })


});