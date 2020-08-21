//IIFES
(function (señorita) {
  console.log(`Alégrese ${señorita}`);
})("Nova");

//Métodos de propiedad
//Cuando una función se pone dentro de un objeto
const musica = {
  reproducir: function () {
    console.log(`Reproduciendo música`);
  },
  pausar: function () {
    console.log(`Pausar música`);
  },
};
musica.reproducir();
musica.pausar();

//Métodos fuera del objeto
musica.borrar = function (id) {
  console.log(`Borrando la canción con el Id: ${id}`);
};

musica.borrar(2);
