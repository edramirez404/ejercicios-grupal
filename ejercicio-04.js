//Ejercicio 4: UNA COMPAÑÍA DE SEGUROS OFRECE DIFERENTES TIPOS DE PÓLIZAS, CON DIFERENTES COBERTURAS Y PRECIOS. LA PÓLIZA BÁSICA TIENE UNA COBERTURA DEL 50% Y UN PRECIO DE 50 DÓLARES. LA PÓLIZA INTERMEDIA TIENE UNA COBERTURA DEL 75% Y UN PRECIO DE 75 DÓLARES. LA PÓLIZA PREMIUM TIENE UNA COBERTURA DEL 100% Y UN PRECIO DE 100 DÓLARES. ESCRIBE UN PROGRAMA QUE PREGUNTE AL USUARIO QUÉ TIPO DE PÓLIZA DESEA Y CALCULE EL PRECIO TOTAL A PAGAR.


let tipoPoliza = prompt("Elija el tipo de póliza que desea (Básica, Intermedia, Premium):").toLowerCase();

let precio;
let cobertura;

if (tipoPoliza === "básica") {
    precio = 50;
    cobertura = 0.50;
} else if (tipoPoliza === "intermedia") {
    precio = 75;
    cobertura = 0.75;
} else if (tipoPoliza === "premium") {
    precio = 100;
    cobertura = 1.00;
} else {
    alert("Tipo de póliza no válido.");
}

if (precio && cobertura !== undefined) {
    alert(`El precio total a pagar por la póliza ${tipoPoliza} es: $${precio}`);
}

undefined
