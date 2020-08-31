const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//Con un for each
/*let total = 0;
carrito.forEach((producto) => (total += producto.precio));

console.log(total);*/

//Con un reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);
