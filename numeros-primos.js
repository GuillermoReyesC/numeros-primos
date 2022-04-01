//declaramos variables
//asumo que es una busqueda del 1 a N numeros, donde N lo dejare en 50

let finalNum = 50;
let multiplo = 2;
let numerosPrimos = [];   // declaracion de variables y el objeto numerosPrimos vacio

for (; multiplo < finalNum; multiplo++) {   //recorremos  hasta cuando se cumpla la condicion 

  if (NumeroPrimo(multiplo)) {
    numerosPrimos.push(multiplo);  // y almacenamos con .push() en nuestro objeto numerosPrimos
  }
  
}

console.log(numerosPrimos);  // imprimimos en consola los numeros primos

function NumeroPrimo(numero) { // funcion para saber si un numero es primo o no

  for (let i = 2; i < numero; i++) { // recorremos desde 2 hasta el numero que nosotros le pasamos

    if (numero % i === 0) { // recorremos el numero y si encuentra un divisor que sea diferente de 1 y el mismo numero que nosotros le pasamos
      return false;
    }

  }

  return numero !== 1; // si no encuentra ningun divisor que sea diferente de 1 y el mismo numero que nosotros le pasamos retorna true
}