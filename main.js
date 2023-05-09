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
let escalasGuardadas = JSON.parse(localStorage.getItem("escalasGuardadas")) || [];
let contadorEscalas = escalasGuardadas.length;
const escalas = [];
const btnDameEscala = document.getElementById("dameEscala"); 
const miralo = document.getElementById("miralo");

escalasGuardadas.forEach((e, i) => {
  escalas.push({ nota: e.nota, escala: e.escala });
  miralo.innerHTML += `<p>${i + 1}.- La escala ${e.nota} ${e.escala[0].includes("b") ? "b" : ""}${e.escala[0].replace(/[A-G]b/g, (match) => match[0])} ${e.escala[0].includes("m") ? "m" : ""}:</p><p>${e.escala.join(", ")}</p>`;
});
btnDameEscala.addEventListener("click", () => {
  const select = document.getElementById("notas");
  const indexSeleccionado = select.selectedIndex;
  const modoSeleccionado = document.getElementById("modo").value;
  const nombreNota = notas[indexSeleccionado];
  const escala = seleccionarModo(indexSeleccionado, modoSeleccionado);
  const id = ++contadorEscalas;
  escalas.push({ nota: nombreNota, escala: escala });
  console.log(escalas);
  miralo.innerHTML = "";
  escalas.forEach((e, i) => {
    miralo.innerHTML += `<p>${i + 1}.- La escala ${e.nota} ${modoSeleccionado}:</p><p>${e.escala.join(", ")}</p>`;
  });
  escalasGuardadas.push({ nota: nombreNota, escala: escala });

  // Guardar la lista actualizada en el LocalStorage
  localStorage.setItem("escalasGuardadas", JSON.stringify(escalasGuardadas));

});



//------------Funciones--------------

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


/* const indexSeleccionado = seleccionarNota();
seleccionarModo(indexSeleccionado); */

/* function capturarValor(){
  let input = document.getElementById("miInput");
  let raiz = input.value;
  //console.log(raiz)

    if (raiz === "" || raiz === null || !notas.includes(raiz)){
      alert("Ingrese una raíz válida");}
    
    } */

/*   function generarEscalaAlec(notas, raiz, modo, escala) {
      let escalaMayor = [0, 2, 4, 5, 7, 9, 11];
      let escalaMenor = [0, 2, 3, 5, 7, 8, 10];
      let escalaMenorMelodica = [0, 2, 3, 5, 7, 9, 11];
      let escalaMenorArmonica = [0, 2, 3, 5, 7, 8, 11];
      let nota = notas.find((nota) => nota === raiz);
      let index = notas.indexOf(nota);
      escala = [];
      for (let i = 0; i < 7; i++) {
        let realIndex;
        if (modo) {
          realIndex = escalaMayor[i] + index;
          if (modo === )
          realIndex = escalaMenor[i] + index;
        }
        escala.push(notas[realIndex]);
      }
      return escala;
    } */
/* function generarEscala() {
  const notas = [         //Estas son las 12 notas que hay en nuestro sistema occidental
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
  





  function option4(notas, raiz, modo, escala) {
    let escalaMayor = [0, 2, 4, 5, 7, 9, 11];
    let escalaMenor = [0, 2, 3, 5, 7, 8, 10];
    let escalaMenorMelodica = [0, 2, 3, 5, 7, 9, 11];
    let escalaMenorArmonica = [0, 2, 3, 5, 7, 8, 11];
    let nota = notas.find((nota) => nota === raiz);
    let index = notas.indexOf(nota);
    escala = [];
    for (let i = 0; i < 7; i++) {
      let realIndex;
      if (modo === true) {
        realIndex = escalaMayor[i] + index;
      } else {
        realIndex = escalaMenor[i] + index;
      }
      escala.push(notas[realIndex]);
    }
    return escala;
  }
  
  function Modo(primerG, segundoG, tercerG, cuartoG, quintoG, sextoG, septimoG){
    this.primerG = primerG
    this.segundoG = segundoG
    this.tercerG = tercerG
    this.cuartoG = cuartoG
    this.quintoG = quintoG
    this.sextoG = sextoG
    this.septimoG = septimoG
  }
  
  const modoMayor = new Modo(0,2,4,5,7,9,11)
  const modoMenor = new Modo(0,2,3,5,7,8,10)
  const modoMenorMelodica = new Modo(0,2,3,5,7,9,11)
  const modoMenorArmonica = new Modo(0,2,3,5,7,8, 11)
} */

/*   let seguir = false;
  do {
    if (raiz === "" || raiz === null || !notas.includes(raiz)) {
      alert("Ingrese una raíz válida");
    } else {
      let modo = confirm(
        "presione Ok si quiere su escala en modo mayor y cancelar si la quiere en modo menor"
      );
      let escala;
      /* Cambiar opciones para decidir su favorita */
/* escala = option4(notas, raiz, modo, escala);
      if (!!escala) {
        console.log(escala);
        alert(escala.toString());
      }
      seguir = confirm(
        "Desea generar otra escala? Presione cancelar para terminar."
      );
      if (!seguir) {
        alert("Gracias por usar la herramienta.");
      }
    }
  } while (raiz === "" || raiz === null || !notas.includes(raiz) || seguir);
}
generarEscala();  */

/* // Opción 1: if else anidados. - 94 líneas
function option1(notas, raiz, modo, escala = null) {
  if (raiz == notas[0] && modo == true) {
    let escalaMayor = ["A", "B", "Db/C#", "Eb/D#", "E", "Gb/F#", "G"];
    console.log(escalaMayor);
  } else if (raiz == notas[0] && modo == false) {
    let escalaMenor = ["A", "B", "C", "D", "E", "F", "G"];
    console.log(escalaMenor);
  }

  if (raiz == notas[1] && modo == true) {
    let escalaMayor = ["Bb/A#", "C", "D", "Eb/D#", "F", "G", "A"];
    console.log(escalaMayor);
  } else if (raiz == notas[1] && modo == false) {
    let escalaMenor = ["Bb/A#", "C", "Db/C#", "Eb/D#", "F", "Gb/F#", "Ab/G#"];
    console.log(escalaMenor);
  }

  if (raiz == notas[2] && modo == true) {
    let escalaMayor = ["B", "Db/C#", "Eb/D#", "E", "Gb/F#", "Bb/A#"];
    console.log(escalaMayor);
  } else if (raiz == notas[2] && modo == false) {
    let escalaMenor = ["B", "Db/C#", "D", "E", "Gb/F#", "G", "A"];
    console.log(escalaMenor);
  }

  if (raiz == notas[3] && modo == true) {
    let escalaMayor = ["C", "D", "E", "F", "G", "A", "B"];
    console.log(escalaMayor);
  } else if (raiz == notas[3] && modo == false) {
    let escalaMenor = ["C", "D", "Eb/D#", "F", "G", "Ab/G#", "Bb/A#"];
    console.log(escalaMenor);
  }

  if (raiz == notas[3] && modo == true) {
    let escalaMayor = ["D", "E", "Gb/F#", "G", "A", "B", "Db/C#"];
    console.log(escalaMayor);
  } else if (raiz == notas[3] && modo == false) {
    let escalaMenor = ["D", "E", "F", "G", "A", "Bb/A#", "C"];
    console.log(escalaMenor);
  }

  if (raiz == notas[4] && modo == true) {
    let escalaMayor = ["Db/C#", "Eb/D#", "F", "Gb/F#", "Ab/G#", "Bb/A#", "C"];
    console.log(escalaMayor);
  } else if (raiz == notas[4] && modo == false) {
    let escalaMenor = ["Db/C#", "Eb/D#", "E", "Gb/F#", "Ab/G#", "A", "B"];
    console.log(escalaMenor);
  }

  if (raiz == notas[5] && modo == true) {
    let escalaMayor = ["D", "Eb/D#", "F", "Gb/F#", "Ab/G#", "Bb/A#", "C"];
    console.log(escalaMayor);
  } else if (raiz == notas[5] && modo == false) {
    let escalaMenor = ["D", "E", "Gb/F#", "G", "A", "B", "Db/C#"];
    console.log(escalaMenor);
  }

  if (raiz == notas[6] && modo == true) {
    let escalaMayor = ["Eb/D#", "F", "G", "Ab/G#", "Bb/A#", "C", "D"];
    console.log(escalaMayor);
  } else if (raiz == notas[6] && modo == false) {
    let escalaMenor = ["Eb/D#", "F", "Gb/F#", "Ab/G#", "Bb/A#", "B", "Db/C#"];
    console.log(escalaMenor);
  }

  if (raiz == notas[7] && modo == true) {
    let escalaMayor = ["E", "Gb/F#", "Ab/G#", "A", "B", "Db/C#", "Eb/D#"];
    console.log(escalaMayor);
  } else if (raiz == notas[7] && modo == false) {
    let escalaMenor = ["E", "Gb/F#", "G", "A", "B", "C", "D"];
    console.log(escalaMenor);
  }

  if (raiz == notas[8] && modo == true) {
    let escalaMayor = ["Gb/F#", "Ab/G#", "B", "Db/C#", "Eb/D#", "F"];
    console.log(escalaMayor);
  } else if (raiz == notas[8] && modo == false) {
    let escalaMenor = ["Gb/F#", "Ab/G#", "A", "B", "Db/C#", "D", "E"];
    console.log(escalaMenor);
  }

  if (raiz == notas[9] && modo == true) {
    let escalaMayor = ["G", "A", "B", "D", "E", "Gb/F#"];
    console.log(escalaMayor);
  } else if (raiz == notas[9] && modo == false) {
    let escalaMenor = ["G", "A", "Bb/A#", "C", "D", "Eb/D#", "F", "G"];
    console.log(escalaMenor);
  }

  if (raiz == notas[10] && modo == true) {
    let escalaMayor = ["Ab/G#", "Bb/A#", "C", "Db/C#", "Eb/D#", "F", "G"];
    console.log(escalaMayor);
  } else if (raiz == notas[10] && modo == false) {
    let escalaMenor = ["Ab/G#", "Bb/A#", "B", "Db/C#", "Eb/D#", "E", "Gb/F#"];
    console.log(escalaMenor);
  }
  return null;
}

// Opción 2: switch - 304 líneas
function option2(notas, raiz, modo, escala) {
  switch (raiz) {
    case notas[0]:
      if (modo) {
        escala = [
          notas[0],
          notas[2],
          notas[4],
          notas[5],
          notas[7],
          notas[9],
          notas[11],
        ];
      } else {
        escala = [
          notas[0],
          notas[2],
          notas[3],
          notas[5],
          notas[7],
          notas[8],
          notas[10],
        ];
      }
      break;
    case notas[1]:
      if (modo) {
        escala = [
          notas[1],
          notas[3],
          notas[5],
          notas[6],
          notas[8],
          notas[10],
          notas[12],
        ];
      } else {
        escala = [
          notas[1],
          notas[3],
          notas[4],
          notas[6],
          notas[8],
          notas[9],
          notas[11],
        ];
      }
      break;
    case notas[2]:
      if (modo) {
        escala = [
          notas[2],
          notas[4],
          notas[6],
          notas[7],
          notas[9],
          notas[11],
          notas[13],
        ];
      } else {
        escala = [
          notas[2],
          notas[4],
          notas[5],
          notas[7],
          notas[9],
          notas[10],
          notas[12],
        ];
      }
      break;
    case notas[3]:
      if (modo) {
        escala = [
          notas[3],
          notas[5],
          notas[7],
          notas[8],
          notas[10],
          notas[12],
          notas[14],
        ];
      } else {
        escala = [
          notas[3],
          notas[5],
          notas[6],
          notas[8],
          notas[10],
          notas[11],
          notas[13],
        ];
      }
      break;
    case notas[4]:
      if (modo) {
        escala = [
          notas[4],
          notas[6],
          notas[8],
          notas[9],
          notas[11],
          notas[13],
          notas[15],
        ];
      } else {
        escala = [
          notas[4],
          notas[6],
          notas[7],
          notas[9],
          notas[11],
          notas[12],
          notas[14],
        ];
      }
      break;
    case notas[5]:
      if (modo) {
        escala = [
          notas[5],
          notas[7],
          notas[9],
          notas[10],
          notas[12],
          notas[14],
          notas[16],
        ];
      } else {
        escala = [
          notas[5],
          notas[7],
          notas[8],
          notas[10],
          notas[12],
          notas[13],
          notas[15],
        ];
      }
      break;
    case notas[6]:
      if (modo) {
        escala = [
          notas[6],
          notas[8],
          notas[10],
          notas[11],
          notas[13],
          notas[15],
          notas[17],
        ];
      } else {
        escala = [
          notas[6],
          notas[8],
          notas[9],
          notas[11],
          notas[13],
          notas[14],
          notas[16],
        ];
      }
      break;
    case notas[7]:
      if (modo) {
        escala = [
          notas[7],
          notas[9],
          notas[11],
          notas[12],
          notas[14],
          notas[16],
          notas[18],
        ];
      } else {
        escala = [
          notas[7],
          notas[9],
          notas[10],
          notas[12],
          notas[14],
          notas[15],
          notas[17],
        ];
      }
      break;
    case notas[8]:
      if (modo) {
        escala = [
          notas[8],
          notas[10],
          notas[12],
          notas[13],
          notas[15],
          notas[17],
          notas[19],
        ];
      } else {
        escala = [
          notas[8],
          notas[10],
          notas[11],
          notas[13],
          notas[15],
          notas[16],
          notas[18],
        ];
      }
      break;
    case notas[9]:
      if (modo) {
        escala = [
          notas[9],
          notas[11],
          notas[13],
          notas[14],
          notas[16],
          notas[18],
          notas[20],
        ];
      } else {
        escala = [
          notas[9],
          notas[11],
          notas[12],
          notas[14],
          notas[16],
          notas[17],
          notas[19],
        ];
      }
      break;
    case notas[10]:
      if (modo) {
        escala = [
          notas[10],
          notas[12],
          notas[14],
          notas[15],
          notas[17],
          notas[19],
          notas[21],
        ];
      } else {
        escala = [
          notas[10],
          notas[12],
          notas[13],
          notas[15],
          notas[17],
          notas[18],
          notas[20],
        ];
      }
      break;
    case notas[11]:
      if (modo) {
        escala = [
          notas[11],
          notas[13],
          notas[15],
          notas[16],
          notas[18],
          notas[20],
          notas[22],
        ];
      } else {
        escala = [
          notas[11],
          notas[13],
          notas[14],
          notas[16],
          notas[18],
          notas[19],
          notas[21],
        ];
      }
      break;
    case notas[12]:
      if (modo) {
        escala = [
          notas[12],
          notas[14],
          notas[16],
          notas[17],
          notas[19],
          notas[21],
          notas[23],
        ];
      } else {
        escala = [
          notas[12],
          notas[14],
          notas[15],
          notas[17],
          notas[19],
          notas[20],
          notas[22],
        ];
      }
      break;
  }
  return escala;
}

// Opción 3: Usando un index para encontrar la raíz y luego sumarle los intervalos de la escala. - 21 líneas
function option3(notas, raiz, modo, escala) {
  let nota = notas.find((nota) => nota === raiz);
  let index = notas.indexOf(nota);
  escala =
    modo === true
      ? [
          notas[0 + index],
          notas[2 + index],
          notas[4 + index],
          notas[5 + index],
          notas[7 + index],
          notas[9 + index],
          notas[11 + index],
        ]
      : [
          notas[0 + index],
          notas[2 + index],
          notas[3 + index],
          notas[5 + index],
          notas[7 + index],
          notas[8 + index],
          notas[10 + index],
        ];
  return escala;
} */

// Opción 4: Usando modelos de escalas y agregando con push a la escala usando index. - 8 líneas
