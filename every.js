const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Todos se deben de cumplir
const resultado = carrito.every((producto) => producto.precio < 500);

console.log(resultado);

//Al menos uno se debe de cumplir
const resultado2 = carrito.some((producto) => producto.precio < 500);

console.log(resultado2);
