function saludar(nombre) {
  if (typeof nombre === "undefined") {
    nombre = "Visitante";
  }
  return `hola ${nombre}`;
}
let saludo;
saludo = saludar("Carolina");
console.log(saludo);

//Funtion expression
const salute = function (
  nombre = "Visitante",
  edad = 20,
  trabajo = "desarrollo web"
) {
  return `hola,tienes ${edad},profesion ${trabajo} y te llamas ${nombre}`;
};
console.log(salute());
