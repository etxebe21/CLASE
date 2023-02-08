// Ejemplo 1: Declarar una función que escriba el texto en pantalla 'Este es un mensaje de ejemplo'
// Ejecutar la función.


function escribirTexto()
{
	console.log('Este es un mensaje de ejemplo');
}

//Ejecutamos la función.
escribirTexto();

// Ejemplo 2: Declarar dos variables (a, b) dentro de una función y darles los valores a=2, b=3. Calcular su suma.
// Sacar en pantalla el mensaje : "Suma: 5"
// Ejecutar la función.


function escribirSuma()
{
    var a = 2;
    var b = 3;
    var suma = a + b;
	console.log('Suma: ' + suma);
}

//Ejecutamos la función
escribirSuma();

// Ejemplo 3: Declarar una función que recibe como parámetros las varibles numéricas a y b dadas y devuelve el resultado de su suma. 
// Mostrar el resultado de la función.
// Ejecutar la función.

//Datos
var a = 12;
var b = 36;


//Declaramos la función. Los argumentos num1 y num2 son los que se reciben. (No tienen por qué llamarse como las variables a y b)
function sum (num1, num2) 
{
    const value = num1 + num2;
    console.log('El resultado de la suma es: ' + value);
}

//Ejecutamos la función. Pasamos como argumentos a y b.
sum(a, b);