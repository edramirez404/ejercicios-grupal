/*2. UNA EMPRESA OFRECE UN BONO DE PRODUCTIVIDAD A SUS TRABAJADORES, DEPENDIENDO DEL NÚMERO DE 
UNIDADES PRODUCIDAS EN UN MES. SI SE PRODUCEN MÁS DE 100 UNIDADES. SE OTORGA UN BONO DEL 5% 
DEL SALARIO. SI SE PRODUCEN MÁS DE 200 UNIDADES SE OTORGA UN BONO DEL DEL SALARIO. SI SE PRODUCEN
 MENOS DE 100 UNIDADES. NO HAY BONO. ESCRIBE UN PROGRAMA QUE CALCULE EL BONO A OTORGAR Y MUESTRE
EL SALARIO TOTAL A RECIBIR*/

const unidades = parseFloat(prompt("Ingrese el número de unidades producidas:"))
const salario = parseFloat(prompt("Ingrese el salario:"))
let bono = 0
if (unidades > 100 && unidades < 200) {
    bono = salario * 0.05
} else if (unidades >= 200) {
    bono = salario * 0.1
} else {
    bono = 0
}  
const salarioTotal = salario + bono
alert(`El salario total a recibir es: ${salarioTotal} y el bono otorgado es: ${bono}`)