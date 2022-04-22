//Contenido de la pantalla en dos dimensiones
//funcion fillRect para llenar en un plano cartesiano(param1,param2,param3,param)-->(posicionInicialX,posicionInicialY,avanza400ejehorizonta,avanza600ejevertical)

var pantalla= document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillRect(0,0,600,400);
