

// ✅ Acierto
function acierto( descubiertas ) {
    descubiertas.forEach( elemento => {
      elemento.classList.add( "acertada" );
    });
    //Agregamos sonido
    document.querySelector("#sonido-acierto").play();
};



// ✅ Error
function error( descubiertas ) {
    
    descubiertas.forEach( elemento => {
      elemento.classList.add("error");
    });

    //Agregamos sonido
    document.querySelector("#sonido-error").play();
  
    setTimeout( () => {
      descubiertas.forEach( elemento => {
        elemento.classList.remove("descubierta");
        elemento.classList.remove("error");
      });
    }, 1000);
};


export {
    acierto,
    error
};
