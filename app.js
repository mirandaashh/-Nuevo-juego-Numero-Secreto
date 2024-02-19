let numeroSecreto=0;
let intentos;

console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
function limpiarCaja(){
    document.getElementById("valorUsuario").value="";
}
function CondicionesIniciales (){
    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("p","Indica un número del 1 al 10");
    intentos=1;
    numeroSecreto=generarNumeroAleatorio();
}

function reiniciarJuego(){
    //reiniciar el numero de intentos
    //Generar numero secreto
    //Indicar el mensaje de intervalos de numero
    CondicionesIniciales();
    //Limpiar caja
    limpiarCaja();
    //Dehablitar el boton nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
}
function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario==numeroSecreto) {
        asignarTextoElemento("p",`Felicidades, Acertaste el número en ${intentos==1 ? "vez" : "veces" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        }  else{
        if (numeroUsuario>numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        }
        else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }   
}



function generarNumeroAleatorio(){
    return Math.floor(Math.random()*10)+1;

}

CondicionesIniciales();





