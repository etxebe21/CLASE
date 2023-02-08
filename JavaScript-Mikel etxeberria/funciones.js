// 1.- Declarar una función que recibe como parámetros a, b y c. Suma los elementos y devuelve la media. Mostrar el resultado de la función
// Ejecutar la función. 

var a = 12;
var b = 36;
var c = 3;

function sumMedia ()
{
var suma = a+b+c;
var media = suma /3;
console.log("la media es " + media)
}
 sumMedia();

// 2.- Declarar una función que recibe como parámetros a , b , c y opcion. 
// Si opcion es true multiplica a y b y divide entre c. Mostrar el resultado de la función
// Ejecutar la función. 

var a = 12;
var b = 36;
var c = 3;
var opcion = true;

function multiDiv()
{
var multi = a * b;
var div = multi / c;
console.log("La división es " + div)
}

multiDiv();

// 3.- Declarar una función que muestre los números impares de 0 a 100. Mostrar el resultado de la función
// Ejecutar la función. 

function impares ()
{
    for (let i = 0; i < 100; i++) 
    { 
        if(i%2 != 0) 
        {
            console.log(i);
        }  
      } 
}

impares();

// 4.- Declarar una función que muestre la tabla de multiplicar de la siguiente manera:

// 1 * 1 = 1
// 1 * 2 = 2
// ...
// ...
// 8 * 5 = 40
// ...
// 10 * 9 = 90
// 10 * 10 = 100

// Nota: Tiene que aparecer la tabla entera, en LÍNEAS SEPARADAS
// Ejecutar la función

function tablaMulti(tabla)
{
    for (i = 0; i <= 10; i++) 
    
    console.log(tabla + "x" + i + "="+ tabla * i);

}


tablaMulti(1);



// 5.- Declarar una función que recibe 2 números como parámetros, devuelve el mayor de los dos y si son iguales devuelve un mensaje. 
// Mostrar el resultado de la función
// Ejecutar la función. 

function mayorIgual(n1,n2)
{
    

var n1= prompt('ingrese el primer numero');
var n2 = prompt('ingrese el segundo numero');
 
if ( n1 > n2 )
        alert( "El mayor es " + n1 );

if ( n1 < n2 )
         alert( "El mayor es "+ n2 );
else
        alert( "SON IGUALES" );

console.log(alert);

}


mayorIgual();