
function confirmar(){

var nome = document.getElementById("nome").value;
var altura = document.getElementById("altura").value;
var peso = document.getElementById("peso").value;
var res = document.getElementById("res");
   
let conv = altura/100
let imc = peso / (conv *conv)



if(imc<18.5){
   res.innerHTML = ` Imc: ${imc.toFixed(2)}, Seu Imc está abaixo do valor ideal`
}else if(imc>18.5 && imc<24.9){
   res.innerHTML = ` Imc: ${imc.toFixed(2)}, Seu Imc está no valor ideal`
}else if(imc>25 && imc<29.9){
   res.innerHTML = ` Imc: ${imc.toFixed(2)}, Seu Imc está com sobrepeso`
}else{
   res.innerHTML = ` Imc: ${imc.toFixed(2)}, Seu Imc está constando sobrepeso`
}

}

