function hola() {
  console.log("Hola Craig");
}
hola();
//funcion con un argumento
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
saludar("Craig");
saludar("Nova");
//función con dos argumentos
function sumar(a, b) {
  console.log(a + b);
}
console.log(1 + 2);
//funcion y uso de variables
function sumar(a, b) {
  return a + b;
}
let suma;
suma = sumar(1, 2);
console.log(suma);
//
function saludo(nombre='') {
  return `hola ${nombre}`;
}
let saludando;
saludando = saludo();
console.log(saludando);

