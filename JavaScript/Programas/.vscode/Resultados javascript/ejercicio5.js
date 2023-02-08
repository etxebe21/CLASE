// 5.- Declarar una función que recibe 2 números como parámetros, devuelve el mayor de los dos y si son iguales devuelve un mensaje. 
// Mostrar el resultado de la función
// Ejecutar la función. 





function mayor(num1, num2)
{
    var ret;
    if (num1 > num2)
    {
        ret = num1;
    }
    else if (num1 < num2)
    {
        ret = num2;
    }
    else
    {
        ret = "Son iguales";
    }

    return ret;
}


var ret; //valor de retorno
var num1 = 3;
var num2 = 5;
ret = mayor(num1, num2);
document.write("Dados los numeros: " + num1 + " y " + num2 + " el mayor es: " + ret + '<br>');

var num1 = 6;
var num2 = 1;
ret = mayor(num1, num2);
document.write("Dados los numeros: " + num1 + " y " + num2 + " el mayor es: " + ret + '<br>');

var num1 = 7;
var num2 = 7;
ret = mayor(num1, num2);
document.write("Dados los numeros: " + num1 + " y " + num2 + " el mayor es: " + ret + '<br>');

