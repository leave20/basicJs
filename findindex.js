const pendientes = ["Tareas", "Comer", "Proyectos", "Estudiar javascript"];
const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//Enumerar la cantidad de elementos por indice
//pendientes.forEach((pendiente, i) => {
//  console.log(i);
//});

//Encontrar un elemento por el indice
pendientes.forEach((pendiente, i) => {
  if (pendiente === "Comer") {
    console.log(`Encontrado en el indice ${i}`);
  }
});

//Encontrar el indice de un elemento usando find index
const indice = pendientes.findIndex((pendiente) => pendiente === "Proyectos");
console.log(indice);

//Encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex((producto) => producto.precio === 100);
console.log(indice2);
