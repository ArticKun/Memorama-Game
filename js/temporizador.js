
const temp = {
    temporizador:''
};

// ✅ Iniciar Cronometro
function iniciarTemporizador() {

    let minutos  = 0;
    let segundos = 60;
    let minTexto;
    let segTexto;
    
    // Actualizar Contador
    const actualizarTemporizador = () => {

        // Decrementamos 1 segundo cada vez
        segundos --;

        // Actualizamos al llegar a 60 segundos
        if ( segundos < 0 ) {
            segundos = 59;
            minutos --;
        };

        // Actualizamos al llegar a 0
        if ( minutos < 0 ) {
            segundos = 0;
            minutos  = 0;
            //Detenemos el temporizador
            clearInterval( temp.temporizador );
        };

        // Actualizar Texto
        segTexto = segundos;
        minTexto = minutos;

        // Formatear Texto para dobles digitos
        if ( segundos < 10 ) {
            segTexto = "0" + segTexto;
        };
        if ( minutos < 10 ) {
            minTexto = "0" + minTexto;
        };

        // Actualizar Texto en HTML
        document.querySelector("#minutos").innerHTML  = minTexto;
        document.querySelector("#segundos").innerHTML = segTexto;
    };
    
    // Iniciar Cronometro cada segundo
    temp.temporizador = setInterval( actualizarTemporizador,1000 );
};





export {
    iniciarTemporizador,
    temp
};