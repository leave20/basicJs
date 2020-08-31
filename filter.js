const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
let resultado;
resultado = carrito.filter((producto) => producto.precio > 400);

console.log(resultado);

resultado = carrito.filter((producto) => producto.precio < 600);

console.log(resultado);

resultado = carrito.filter((producto) => producto.nombre !== "Audifonos");

console.log(resultado);

resultado = carrito.filter((producto) => producto.nombre === "Audifonos");

console.log(resultado);
