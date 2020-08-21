let efectivo = 300,
  credito = 300,
  disponible = efectivo + credito,
  totalCarrito = 500;
if (
  totalCarrito < efectivo ||
  totalCarrito < credito ||
  totalCarrito < disponible
) {
  console.log("Puedo pagar");
} else {
  console.log("No puede pagar");
}

//ternarios
const logueado = true;
console.log(logueado === true ? "Si se logueo" : "No se loguea");
