/*Mi proyecto es una herramienta para poder conocer las notas que conforman una escala en 
la teoría de la armonía funcional. Hice cuatro opciones para obtener el mismo resultado, la opcion4
utiliza un ciclo for y algunos métodos que aprendí por fuera. las notas
musicales están escritas con letras por el sistema Berkley que es el que se ocupa
internacionalmente para manejar teoría musical*/
const notas = [
  //Estas son las 12 notas que hay en nuestro sistema occidental
  "A", // 0
  "Bb/A#", // 1
  "B", // 2
  "C", // 3
  "Db/C#", // 4
  "D", // 5
  "Eb/D#", // 6
  "E", // 7
  "F", // 8
  "Gb/F#", // 9
  "G", // 10
  "Ab/G#", // 11
  "A", // 12
  "Bb/A#", // 13
  "B", // 14
  "C", // 15
  "Db/C#", // 16
  "D", // 17
  "Eb/D#", // 18
  "E", // 19
  "F", // 20
  "Gb/F#", // 21
  "G", // 22
  "Ab/G#", // 23
];
const escalas = [];
const btnDameEscala = document.getElementById("dameEscala"); 
btnDameEscala.addEventListener("click", () => {
  const select = document.getElementById("notas");
  const indexSeleccionado = select.selectedIndex;
  const modoSeleccionado = document.getElementById("modo").value;
  crearEscalas(indexSeleccionado, modoSeleccionado)
});
const miralo = document.getElementById("miralo");

const escalasFromLocal = localStorage.getItem(`escalas`);
console.log(escalasFromLocal);
if(!!escalasFromLocal){
  let escalasLocalParsed = JSON.parse(escalasFromLocal);
  console.log(escalasLocalParsed)
  escalasLocalParsed.forEach((e) => crearEscalas(e.nota, e.modo));
}
const borrarLocal = document.getElementById("clear");
borrarLocal.addEventListener('click', borrar);

const dameEjemplos = document.getElementById("ejemplos");
const ejemplo = [];

dameEjemplos.addEventListener('click', () => {
  fetch('/info.json')
    .then(response => response.json())
    .then(data => {
      ejemplo.push(...data);

      const cardContent = ejemplo.map(item => {
        const nota = item.nota;
        const vecinos = item.vecinos;
        const triadaMayorAscendente = item.triadaMayorAscendente;

        return `<div class="card bg-warning">
                  <p>Nota: ${nota}</p>
                  <p>Vecinos: ${vecinos}</p>
                  <p>Triada Mayor Ascendente: ${triadaMayorAscendente}</p>
                </div>`;
      }).join('');

      dameEjemplos.innerHTML = cardContent;
      console.log(data);
    });
});





//------------Funciones--------------
function crearEscalas(indexSeleccionado, modoSeleccionado){
  escalas.push(new Escala (indexSeleccionado, modoSeleccionado));
  miralo.innerHTML = "";
  let escalasParsed = [];
  escalas.forEach((e,i) => {
    escalasParsed.push(e.getEscala().join(", "));
    miralo.innerHTML += `<div id="respuesta" class="card bg-warning" ><p>${i+1}.- La escala ${e.getNombreNota()} ${e.modo}:</p><p>${e.getEscala().join(", ")}</p></div>`});
  localStorage.setItem(`escalas`, JSON.stringify(escalas))
  localStorage.setItem(`escalasParsed`, JSON.stringify(escalasParsed));

}
function Escala(nota, modo) {
  this.nota = nota;
  this.modo = modo;

  this.getEscala = () => {
    return seleccionarModo(this.nota, this.modo);
  };
  this.getNombreNota = () => {return notas[this.nota.toString()]};
}


function seleccionarModo(nota, modo) {

  let indicesASumar = [];

  switch (modo) {
    case "mayor":
      indicesASumar = [0, 2, 4, 5, 7, 9, 11];
      break;
    case "menor":
      indicesASumar = [0, 2, 3, 5, 7, 8, 10];
      break;
    case "menorArmónica":
      indicesASumar = [0, 2, 3, 5, 7, 8, 11];
      break;
    case "menorMelódica":
      indicesASumar = [0, 2, 3, 5, 7, 9, 11];
      break;
  }

  let escala = [];

  indicesASumar.forEach((indice) => {
    escala.push(notas[(nota + indice) % notas.length]);
  });
  


  return escala;
}

function borrar(){
  localStorage.removeItem('escalas');
  escalas.length = 0;
  miralo.innerHTML = "";
}