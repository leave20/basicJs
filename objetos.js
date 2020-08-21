const autos = [
  { modelo: "Mustang", motor: 6.2 },
  { modelo: "Camaro", motor: 6.1 },
  { modelo: "Challenger", motor: 6.3 },
];

console.log(autos[0].modelo);
for (let i = 0; i < autos.length; i++) {
  console.log(`${autos[i].modelo}${autos[i].motor}`);
}

const persona = {
  nombre: "Miguel",
  apellido: "Martinez",
  profesion: "Diseñador gráfico",
  email: "asdasd@gmail.com",
  edad: 27,
  musica: ["Trance", "Rock", "Grunge"],
  hogar: {
    ciudad: "Guadalajara",
    pais: "Mexico",
  },
  nacimiento: function () {
    return new Date().getFullYear() - this.edad;
  },
};
console.log(persona.nacimiento());

persona.musica.push("Alternativa");
console.log(persona);
//traer un elemento
console.log(persona.apellido);
//traer un elementos del objeto dentro del objeto principal
console.log(persona.hogar.pais);
console.log(persona["hogar"]["pais"]);
