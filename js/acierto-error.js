

// ✅ Acierto
function acierto( descubiertas ) {
    descubiertas.forEach( elemento => {
      elemento.classList.add( "acertada" );
    });
};



// ✅ Error
function error( descubiertas ) {
    
    descubiertas.forEach( elemento => {
      elemento.classList.add("error");
    });
  
    setTimeout( () => {
      descubiertas.forEach( elemento => {
        elemento.classList.remove("descubierta");
        elemento.classList.remove("error");
      });
    }, 1000);
};


// ✅ Mostrar cantidad de movimientos 

// ✅ Mostrar Aciertos y errores al usuario


export {
    acierto,
    error
};
