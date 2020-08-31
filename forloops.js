//For Loops
//De 1 en 1
for (let i = 0; i < 10; i++) {
  console.log(`Numero: ${i}`);
}
//Detectando pares e impares
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El numero ${i} es PAR`);
  } else {
    console.log(`El numero ${i} es IMPAR`);
  }
}

//Con arreglos
const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

console.log(carrito.length);

//Traer en orden la lista de carritos por nombre
for (let i = 0; i < carrito.length; i++) {
  const element = carrito[i].nombre;
  console.log(element);
}

//break y continue
//break
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Este es el 5");
    //break;
    continue;
  }
  console.log(`Numero: ${i}`);
}
//usando el arreglo anterior
for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
    break;
  }
  console.log(carrito[i].nombre);
}
