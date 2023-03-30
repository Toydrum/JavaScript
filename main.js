/*Mi proyecto es una herramienta para poder conocer las notas que conforman una escala en 
la tería de la armonía funcional*/


function generarEscala(){

  const notas = ["A", "Bb/G#", "B", "C", "Db/C#", "D", "Eb/D#", "E", "F", "Gb/F#", "G", "Ab/G#","A", "Bb/G#", "B", "C", "Db/C#", "D", "Eb/D#", "E", "F", "Gb/F#", "G", "Ab/G#"]
  let raiz = (prompt ("escoge la raíz de la escala de entre estas opciones: A, Bb/G#, B, C, Db/C#, D, Eb/D#, E, F, Gb/F#, G"))
  let modo = (confirm("presione Ok si quiere su escala en modo mayor y cancelar si la quiere en modo menor"))
    if(raiz == notas[0] && modo == true){
      let escalaMayor =["A","B","Db/C#","Eb/D#","E","Gb/F#","G"]
      console.log(escalaMayor)}

    else if(raiz == notas[0] && modo == false){
      let escalaMenor = ["A","B","C","D","E","F","G"]
      console.log(escalaMenor)}

    if(raiz == notas[1] && modo == true){
      let escalaMayor =["Bb/A#","C","D","Eb/D#","F","G","A"]
      console.log(escalaMayor)}
  
    else if(raiz == notas[1] && modo == false){
      let escalaMenor = ["Bb/A#","C","Db/C#","Eb/D#","F","Gb/F#","Ab/G#"]
      console.log(escalaMenor)}  

    if(raiz == notas[2] && modo == true){
      let escalaMayor =["B","Db/C#","Eb/D#","E","Gb/F#","Bb/A#"]
      console.log(escalaMayor)}
    
    else if(raiz == notas[2] && modo == false){
      let escalaMenor = ["B","Db/C#","D","E","Gb/F#","G","A"]
      console.log(escalaMenor)}  
  
    if(raiz == notas[3] && modo == true){
      let escalaMayor =["C","D","E","F","G","A","B"]
      console.log(escalaMayor)}
      
    else if(raiz == notas[3] && modo == false){
      let escalaMenor = ["C","D","Eb/D#","F","G","Ab/G#","Bb/A#"]
      console.log(escalaMenor)} 

    if(raiz == notas[3] && modo == true){
      let escalaMayor =["D","E","Gb/F#","G","A","B","Db/C#"]
      console.log(escalaMayor)}
      
    else if(raiz == notas[3] && modo == false){
      let escalaMenor = ["D","E","F","G","A","Bb/A#","C"]
      console.log(escalaMenor)}

    if(raiz == notas[4] && modo == true){
      let escalaMayor =["Db/C#","Eb/D#","F","Gb/F#","Ab/G#","Bb/A#","C"]
      console.log(escalaMayor)}
        
    else if(raiz == notas[4] && modo == false){
      let escalaMenor = ["Db/C#","Eb/D#","E","Gb/F#","Ab/G#","A","B"]
      console.log(escalaMenor)}      

    if(raiz == notas[5] && modo == true){
      let escalaMayor =["D","Eb/D#","F","Gb/F#","Ab/G#","Bb/A#","C"]
      console.log(escalaMayor)}
          
    else if(raiz == notas[5] && modo == false){
      let escalaMenor = ["D","E","Gb/F#","G","A","B","Db/C#"]
      console.log(escalaMenor)} 

      if(raiz == notas[6] && modo == true){
        let escalaMayor =["Eb/D#","F","G","Ab/G#","Bb/A#","C","D"]
        console.log(escalaMayor)}
            
      else if(raiz == notas[6] && modo == false){
        let escalaMenor = ["Eb/D#","F","Gb/F#","Ab/G#","Bb/A#","B","Db/C#"]
        console.log(escalaMenor)}  

      if(raiz == notas[7] && modo == true){
        let escalaMayor =["E","Gb/F#","Ab/G#","A","B","Db/C#","Eb/D#"]
        console.log(escalaMayor)}
              
      else if(raiz == notas[7] && modo == false){
        let escalaMenor = ["E","Gb/F#","G","A","B","C","D"]
        console.log(escalaMenor)}

      if(raiz == notas[8] && modo == true){
        let escalaMayor =["Gb/F#","Ab/G#","B","Db/C#","Eb/D#","F"]
        console.log(escalaMayor)}

      else if(raiz == notas[8] && modo == false){
        let escalaMenor = ["Gb/F#","Ab/G#","A","B","Db/C#","D","E"]
        console.log(escalaMenor)}

      if(raiz == notas[9] && modo == true){
        let escalaMayor =["G","A","B","D","E","Gb/F#"]
        console.log(escalaMayor)}

      else if(raiz == notas[9] && modo == false){
        let escalaMenor = ["G","A","Bb/A#","C","D","Eb/D#","F","G"]
        console.log(escalaMenor)}

      if(raiz == notas[10] && modo == true){
        let escalaMayor =["Ab/G#","Bb/A#","C","Db/C#","Eb/D#","F","G"]
        console.log(escalaMayor)}

      else if(raiz == notas[10] && modo == false){
        let escalaMenor = ["Ab/G#","Bb/A#","B","Db/C#","Eb/D#","E", "Gb/F#"]
        console.log(escalaMenor)}

}
generarEscala()