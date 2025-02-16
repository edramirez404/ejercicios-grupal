/*3. un restaurante ofrece descuentos a los clientes segun la edad. los menores de 12 años tienen un descuento del 50% en su consumo. Los mayores de 65 años tienen un descuento del 25% en su consumo. Los clientes entre 12 y 65 años no tienen descuento. Escribe un programa que calcule el descuento a aplicar y muestre el monto total a pagar*/
let edad = parseInt(prompt("Que edad tiene?"))
let monto=parseInt(prompt("cual es el monto a pagar?"))
let descuento = 0

if(edad<12){
descuento=0.25
    monto=monto-descuento
}else if (edad>=65) {
    descuento=0.25
    monto=monto-descuento
}
console.log("tiene un descuento de: " + descuento+ " Y el total a pagar es de: " + monto)