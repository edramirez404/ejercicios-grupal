/*UN PROFESOR CALIFICA A SUS ESTUDIANTES SEGÚN LA SIGUIENTE ESCALA: 
0-59 PUNTOS ES UNA CALIFICACIÓN DE F, 
60-69 PUNTOS ES UNA CALIFICACIÓN DE D, 
70-79 PUNTOS ES UNA CALIFICACIÓN DE C, 
80-89 PUNTOS ES UNA CALIFICACIÓN DE B, Y 90-100 PUNTOS ES UNA
CALIFICACIÓN DE A. 
ESCRIBE UN PROGRAMA QUE PREGUNTE LA NOTA DEL ESTUDIANTE Y MUESTRE SU CALIFICACIÓN*/

const puntos = (parseInt(prompt("Ingrese su calificación")))
let Calificacion = 0
if(puntos <= 59 && puntos<60) {
    Calificacion = alert("F")
}else if(puntos >= 60 && puntos <= 69) {
    Calificacion = alert("D")
}else if(puntos >= 70 && puntos <= 79) {
    Calificacion = alert("C")
}else if(puntos >= 80 && puntos <= 89) {
    Calificacion = alert("B")
}else if(puntos >=90 && puntos <=100) {
    Calificacion = alert("A")
}





