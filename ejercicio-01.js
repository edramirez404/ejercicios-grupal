/*UNA TIENDA OFRECE DESCUENTOS SEGÚN EL MONTO DE LA COMPRA REALIZADA. SI EL MONTO ES MAYOR O IGUAL A 100 DÓLARES, SE E
APLICA UN DESCUENTO DEL 10%. SI EL MONTO ES MAYOR O IGUAL A 200 DÓLARES, SE APLICA UN DESCUENTO DEL 20%. SI EL MONTO ES
MENOR A 100 DÓLARES, NO HAY DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO
TOTAL A PAGAR. */
const valorFactura = parseFloat(prompt("Ingrese el valor de su factura: "));
let totalFactura = 0;
let descuento = 0;

if (valorFactura >= 200) {
    descuento = valorFactura * 0.20;
} else if (valorFactura >= 100) {
    descuento = valorFactura * 0.10;
}

totalFactura = valorFactura - descuento;

console.log("Descuento aplicado: $" + descuento.toFixed(2));
console.log("Monto total a pagar: $" + totalFactura.toFixed(2));
alert("Descuento aplicado: $" + descuento.toFixed(2) + "\nMonto total a pagar: $" + totalFactura.toFixed(2));
