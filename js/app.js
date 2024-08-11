

// ✅ Crear de tarjetas
const grupoTarjetas   = ["⚡", "👽", "👹", "👺", "👾", "🤖", "💩", "💀", "🤙"];
// Duplicar tarjetas para crear pares
const tarjetasTotales = [...grupoTarjetas, ...grupoTarjetas ];


// ✅ Boton Repartir Tarjetas
const button = document.querySelector("#btn-repartir");
button.addEventListener( "click", reparteTarjetas );


// ✅ Barajar tarjetas
function barajaTarjetas() {
    let resultado;
    resultado = tarjetasTotales.sort( () => {
        return 0.5 - Math.random();
    });
    return resultado;
};


// ✅ Repartir Tarjetas
function reparteTarjetas(){

    const barajar = barajaTarjetas();
   
    const mesa = document.querySelector("#mesa");

    mesa.innerHTML = "";

    // Crear Tarjeta
    barajar.forEach( emoji  => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta"); 
        tarjeta.dataset.valor = emoji;

        const tarjetaContenido = document.createElement("div");
        tarjetaContenido.classList.add("tarjeta__contenido");
        tarjetaContenido.innerHTML = emoji;

        tarjeta.appendChild( tarjetaContenido );
        tarjeta.onclick = descubrir;

        mesa.appendChild( tarjeta );
    });

    // Animacion de entrada Tarjetas
    const tarjetas = document.querySelectorAll(".tarjeta");
    // Deshabilitar clics en las tarjetas
    tarjetas.forEach(tarjeta => {
        tarjeta.style.pointerEvents = 'none';
    });
    setTimeout(() => {
        tarjetas.forEach( (tarjeta, index) => {
            // Delay para efecto escalonado de entrada
            tarjeta.style.animationDelay = `${index * 0.1}s`; 
        });
        setTimeout(() => {
            tarjetas.forEach(tarjeta => {
                //quitar animacion Delay entrada
                tarjeta.style.animation = "none";
                // Volver a habilitar clics en las tarjetas
                tarjeta.style.pointerEvents = 'auto';
            });
        }, 2000); 
    }, 10); 
};


// ✅ Voltear Tarjetas
function descubrir(e){
    // voltear tarjeta añadiendo clase descubierta
    e.target.classList.add("descubierta"); 
    // seleccionamos tarjeta clase descubierta y no clase acertada
    const descubiertas = document.querySelectorAll( ".descubierta:not(.acertada)" );
    // Validar si ya hay dos tarjetas descubiertas
    if ( descubiertas.length > 2 ){
        e.target.classList.remove("descubierta");
        return;
    }
    // Validar si dos tarjetas son iguales
    comparar( descubiertas );
};


// ✅ Comparar Tarjetas
function comparar( descubiertas ){
    // Si hay dos tarjetas descubiertas, validar si son iguales
    if ( descubiertas.length === 2 ) {
        if ( descubiertas[0].dataset.valor === descubiertas[1].dataset.valor ) {
            acierto( descubiertas );
        } else {
            error( descubiertas );
        }
    } 
};


// ✅ Acierto
function acierto( descubiertas ){
    // Añadir clase acertada a las tarjetas iguales
    // Agregar un pequeño retraso antes de ocultar las tarjetas
   setTimeout(() => {
    descubiertas.forEach( tarjeta => {
        tarjeta.classList.add( "acertada" );
    });
    }, 1000);
};


// ✅ Error
function error( descubiertas ){
   // Quitar clase descubierta a tarjetas no iguales
   // Agregar un pequeño retraso antes de voltear las tarjetas
   setTimeout(() => {
       descubiertas.forEach( tarjeta => {
           tarjeta.classList.remove( "descubierta" );
       });
    }, 1000);

  
};





