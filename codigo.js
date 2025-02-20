function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1)+min)
}
   function eleccion(jugada){
        let resultado = ""
        if(jugada == 1) {
   resultado = "piedra ✊"
   } else if(jugada == 2) {
   resultado = "papel ✋"
   } else if (jugada == 3) {
   resultado = "tijera ✌️"
   } else{
   resultado = "MAL ELEGIDO"}
   return resultado

}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas =  0

while (triunfos < 3 && perdidas < 3) {
 pc =        aleatorio(1,3)
   jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")
   //alert("elegiste " + jugador)
   
   alert("PC elige: " + eleccion(pc))
   alert("Tu eliges: " + eleccion(jugador))

   // COMBATE
   if(pc == jugador){
        alert("EMPATE")
   }    else if(jugador == 1 && pc == 3){
        alert("GANASTE HUELEBICHO")
        triunfos = triunfos + 1
   }    else if(jugador == 2 && pc == 3){
        alert("GANASTE GAY")
        triunfos = triunfos + 1
   }     else if(jugador == 3 && pc == 1){
        alert("perder GAY")
        triunfos = triunfos + 1
   }  else{
        alert("perdiste")
        perdidas = perdidas + 1
   }
}

alert("ganaste" + triunfos + " veces. perdiste " + perdidas + "veces.")
