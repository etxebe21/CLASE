// 2.- Declarar una función que recibe como parámetros a , b , c y opcion. 
// Si opcion es true multiplica a y b y divide entre c. Mostrar el resultado de la función
// Ejecutar la función. 

var a = 12;
var b = 36;
var c = 3;
var opcion = true;

function sum (num1, num2, num3, option) 
{
    if (option)
    {
        var value = num1 * num2 / num3;
        document.write('El resultado es :' + value);
    }
    
}

sum(a, b, c, opcion);