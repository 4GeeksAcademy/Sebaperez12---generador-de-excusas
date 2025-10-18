

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function datoRandom(arreglo) {

  const indiceAleatorio = Math.floor(Math.random() * arreglo.length);
    
    return arreglo[indiceAleatorio];
    
}

let resultado = datoRandom(who) + " " + datoRandom(action) + " " + datoRandom(what) + " " + datoRandom(when); 

document.getElementById("excuse").innerText = resultado;