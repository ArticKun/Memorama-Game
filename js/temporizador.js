

import { timerOver } from "./finalizar.js";
import { temp, titulo, btnRepartir, modo } from "./globales.js";


// ✅ Iniciar Cronometro
function iniciarTemporizador() {

    //Minutos y segundos iniciales
    let minutos  = 0;
    let segundos = 5;

    let minTexto;
    let segTexto;
    
    // Actualizar Contador
    const actualizarTemporizador = () => {

        // Decrementamos 1 segundo cada vez
        segundos --;

        // Segundos que se repetiran (59) comun por minuto
        // Cuando llegue a 0, decrementamos minutos
        if ( segundos < 0 ) {
            segundos = 5;
            minutos --;
        };

        // Actualizamos al llegar a 0 en seg / min
        if ( minutos < 0 ) {
            segundos = 0;
            minutos  = 0;
            //Detenemos el temporizador
            clearInterval( temp.temporizador );
            // Mostrar Modal Cuando se acaba el Tiempo
            if( !modo.modoRelax ) {
                timerOver();
                //✅ Limpiar HTML
                const mesa = document.querySelector("#mesa");
                mesa.innerHTML = ""; // limpiar mesa previa
                //Ocultar Boton Repartir, titulo al mostrar Modal Final
                titulo.classList.add("ocultarTituloButton");
                btnRepartir.classList.add("ocultarTituloButton");
                return;
            }
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
    iniciarTemporizador
};