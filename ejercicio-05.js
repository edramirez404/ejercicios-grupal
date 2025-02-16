/*UN CINE OFRECE DIFERENTES PRECIOS DE ENTRADA SEGÚN LA EDAD DE LOS ESPECTADORES.
LOS MENORES DE 12 AÑOS PAGAN 5 DÓLARES, LOS MAYORES DE 65 AÑOS PAGAN 7 DÓLARES, 
Y LOS DEMÁS PAGAN 10 DÓLARES. ESCRIBE UN PROGRAMA QUE PREGUNTE LA EDAD DEL 
ESPECTADOR Y CALCULE EL PRECIO DE ENTRADA.*/

const edad = parseInt(prompt("Ingrese su edad"))
let precioTotal = 0
if(edad <= 12) {precioTotal = 5
}
else if(edad >= 65) {precioTotal = 7}
else {precioTotal = 10}
alert('El precio de su entrada es: ' + precioTotal)




