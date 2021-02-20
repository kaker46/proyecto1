//Formas de pintar los resultados:
  // console.log(edadFernandoSimon);

//1. Compara tu edad (o una cualquiera) con la de Fernando Simón. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()
let edadFernandoSimon = 57;
 console.log(edadFernandoSimon);

let edadfran = 42;
 console.log(edadfran);

let resta=(edadFernandoSimon-edadfran);
 console.log(resta);

let suma=(edadfran+edadFernandoSimon);
console.log(suma);

if(resta>0){
  console.log("mayor que yo")
  document.write("mayor que yo")
}
else{(resta<=0)
  console.log("menor o igual que yo")
  document.write("menor o igual que yo")
}
if(suma>90){
    console.log("viejunos")
    document.write("viejunos")
}
else{(suma<=90)
    console.log("yogurines")
    document.write("yogurines")
}
//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
//   como resultado una string que indica si el número es par o impar
//.   Mostrar por pantalla el resultado devuelto por la función.
//if(), %

let numero = prompt("Introduce un número entero");

let resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}


let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
document.write(numeros);
console.log(numeros);


//3. recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %
function multiplosdetres() {
  let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
  for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 3 == 0) {
          console.log(numeros[i]);
      }
  }
}




let multipl033 =numeros
let multipl03 =( numeros/3)
  if(numeros % 3 == 0) {
    console.log("multiplo de 3");
  }
    
  else {
    console.log("no lo es");
  }




//kl4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()

let min = numeros[0];

for (let i = 0; i < numeros.length ; i++) {
    if (numeros[i] < min) {
        console.log('Anterior minimo: ' + min + ', nuevo minimo: ' + numeros[i]);
        min = numeros[i];
    }
}
console.log('Valor mínimo: ' + min);






for (let numeros=0;numeros/3;numeros++)
        {
            if(multiple(numeros,3))
                multiples_3.push(numeros);
 
        }

if(numeros % 3 == 0){
}
