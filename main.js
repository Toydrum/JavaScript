/*Mi proyecto es una herramienta para poder conocer las notas que conforman una escala en 
la tería de la armonía funcional*/

function generarEscala() {
  const notas = [
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
    "Bb/G#", // 13
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
    "A", // 24
  ];
  let raiz = prompt(
    "escoge la raíz de la escala de entre estas opciones: A, Bb/G#, B, C, Db/C#, D, Eb/D#, E, F, Gb/F#, G"
  );
  let modo = confirm(
    "presione Ok si quiere su escala en modo mayor y cancelar si la quiere en modo menor"
  );
  let escala = [];
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
  console.log(escala);
}
generarEscala();
