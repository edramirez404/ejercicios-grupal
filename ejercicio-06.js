/*UNA TIENDA DE ROPA TIENE DIFERENTES PROMOCIONES SEGÚN LA CANTIDAD DE PRENDAS COMPRADAS. SI SE COMPRAN MÁS DE 3 PRENDAS, SE APLICA UN DESCUENTO DEL 10% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MÁS DE 5 PRENDAS, SE APLICA UN DESCUENTO DEL 20% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MENOS DE 3 PRENDAS, NO HAY DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.*/
const totalCompraUnidad = parseInt(prompt("Ingrese el total de articulos comprados"));
const costoUnidad = parseFloat(prompt("Ingresa el costo de cada articulo"))
let totalFactura = 0;
if (totalCompraUnidad > 5) {
    totalFactura = (totalCompraUnidad * costoUnidad) * 0.80
    alert("Se aplico un descuento del 20% a tu factura \n El total es de Q " + totalFactura)
} else if (totalCompraUnidad > 3 && totalCompraUnidad <= 5) {
    totalFactura = (totalCompraUnidad * costoUnidad) * 0.90
    alert("Se aplico un descuento del 10% a tu factura \n El total es de Q" + totalFactura)
} else {
    totalFactura = (totalCompraUnidad * costoUnidad)
    alert("El total de tu factura es de Q" + totalFactura)
} 