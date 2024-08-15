

import { timerOver } from "./finalizar.js";
import { temp, 
        titulo, 
        btnRepartir, 
        modo, 
        nivelActual
} from "./globales.js";



// ✅ Iniciar Cronometro
function iniciarTemporizador( ) {

    //✅ Minutos y segundos iniciales
    //por niveles
    let minutos;
    let segundos;

    if( nivelActual.level === 0 ){
        minutos  = 0;
        segundos =  10;
    } else if( nivelActual.level === 1 ){
        minutos  = 0;
        segundos = 60;
    }else if( nivelActual.level === 2 ){
        minutos  = 2;
        segundos = 59;
    }else if( nivelActual.level === 3 ){
        minutos  = 3;
        segundos = 59;
    }else if( nivelActual.level === 4 ){
        minutos  = 0;
        segundos = 5;
    }

    //Mostrar minutos y seg en Texto
    let minTexto;
    let segTexto;
    
    // Actualizar Contador
    const actualizarTemporizador = () => {

        // Decrementamos 1 segundo cada vez
        segundos --;

        // Segundos que se repetiran (59) comun por minuto
        // Cuando llegue a 0, decrementamos minutos
        if ( segundos < 0 ) {
            segundos = 59;
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

        // Formatear Texto para dobles digitos
        segTexto = segundos < 10 ? `0${segundos}` : segundos;
        minTexto = minutos < 10 ? `0${minutos}` : minutos;

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