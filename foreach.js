const pendientes = ["Tareas", "Comer", "Proyectos", "Estudiar javascript"];
//for each arrow function de una sola linea
pendientes.forEach((pendiente) => console.log(pendiente));
//for each arrow function con mas de 1 parametro
pendientes.forEach((pendiente, indice) => {
  console.log(`${indice}: ${pendiente}`);
});
const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
const nuevoArreglo = carrito.forEach((producto) => producto.nombre);
console.log(nuevoArreglo);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);
console.log(nuevoArreglo2);
