const pendientes = ["Tareas", "Comer", "Proyectos", "Estudiar javascript"];
const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

for (let pendiente in pendientes) {
  console.log(pendiente);
}

for (let producto in carrito) {
  console.log(producto);
}

const automovil = {
  modelo: "Camaro",
  year: 1000,
  motor: "6.0",
};

for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(valor);
  console.log(llave);
}
//Comprobar si un valor existe en un arreglo
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Enero si existe");
  }
});

const resultado = meses.includes("Diciembre");
console.log(resultado);

//En un arreglo de objetos se utiliza .some
const existe = carrito.some((producto) => {
  return producto.nombre === "Celular";
});
console.log(existe);

const existe2 = carrito.some((producto) => producto.nombre === "Monitor Curvo");
console.log(existe2);
//En un arreglo tradicional con -some
const existe3 = meses.some((mes) => mes === "Febrero");
console.log(existe3);
