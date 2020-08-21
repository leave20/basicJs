//creando un arreglo
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
//Arreglo de Strings (método alternativo)
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.log(meses.length);
//Añadir en un argumento
meses[4] = "Mayo";
meses.push("Junio");
//Añadir al inicio
meses.unshift("Añadiendo");
//Eliminar un elemento de un arreglo
meses.pop();
//Eliminar el primer elemento de un arreglo
meses.shift();
//Quitar un rango
meses.splice();
//Revertir
meses.reverse();
//Unir un arreglo con otro
let arreglo1 = [1, 2, 3],
  arreglo2 = [9, 8, 7];
console.log(arreglo1.concat(arreglo2));
//Encontrar un elemento en el arreglo
arreglo1 = ["Platano", "Manzana", "Fresa", "Naranja", "Zanahoria"];
//Ordenando palabras de forma aleatorea
arreglo1.sort();
console.log(arreglo1);
console.log(meses);

//Ordenando numeros de forma aleatoria
arreglo2 = [3, 9, 12, 15, 18, 21, 24, 27];
arreglo2.sort(function (x, y) {
  return y - x;
});
console.log(arreglo2);
////////////////////////////////
let numero = [1, 2, 3];

numero[0] = 4;

numero.push(5);
// meses = ["Enero", "Febrero"];
console.log(numero);
