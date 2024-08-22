let NombreUsuario = prompt ("Ingrese su Nombre")
alert ("Bienvenido a Nirvana bar")

let diareserva = parseInt (prompt("Estos dias tiene disponible."))

for (let i = 1; i <= 5; i++){
    console.log(i)
}
alert ("Para continuar con su reserva necesitamos que complete sus datos.")

let edad = parseInt (prompt ("Ingrese su edad"))
let ubicacion = prompt("Ingrese su ubicación")
const dni = parseInt (prompt("Ingrese su DNI"))

do { 
    edad = parseInt(prompt( "Ingrese su edad."))
    if (edad >= 18){
        console.log ("Gracias por registrarte")
    } else{ 
        alert ("Eres menor de edad, no puedes realizar una reserva")
    }
} while (edad>= 18)
