let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //Extraer número de la caja de texto (input) por su ID
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(intentos);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;

        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value ='';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    }else{
        //Si el número generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //recursividad - Llamarse a si misma hasta generar un número aleatorio que no este en la lista
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //restaurar mensaje - nuevo número secreto - inicializar intentos
    condicionesIniciales();
    //deshabilitar botón 
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();