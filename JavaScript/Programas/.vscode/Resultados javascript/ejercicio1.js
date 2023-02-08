// 1.- Declarar una función que recibe como parámetros a, b y c. Suma los elementos y devuelve la media. Mostrar el resultado de la función
// Ejecutar la función. 

var a = 12;
var b = 36;
var c = 3;

function media (num1, num2, num3) 
{
    var value = (num1 + num2 + num3) / 3;
    document.write('El resultado de la media es :' + value);
}

media(a, b, c);
