let paciente = document.querySelector("#primer-paciente");

console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let valorPeso = tdPeso.textContent;
console.log(paciente);
console.log(tdPeso);
console.log(valorPeso);

var altura = paciente.querySelector(".info-altura");
var valorAltura = altura.textContent;
console.log(valorAltura);

var pesoEsValido = true;
var alturaEsValida = true;

var tdIMC = paciente.querySelector(".info-imc");


/*console.log(indiceMasaCorporal);*/

if (valorPeso < 0 || valorPeso > 1000)  {
    console.log("Peso incorrecto");
    tdIMC.textContent ="Peso incorrecto";
    pesoEsValido= false;
}

if (valorAltura < 0 || valorAltura > 3) {
    alturaEsValida=false;
    tdIMC.textContent ="Altura incorrecta";
    console.log("Altura incorrecta");
}
if(pesoEsValido && alturaEsValida){
    let indiceMasaCorporal = (valorPeso)/(Math.pow(valorAltura,2));
    tdIMC.textContent = indiceMasaCorporal;

}