// 6. Declarar una función que sume los elementos del siguiente array y devuelva la suma (como VALOR DE RETORNO). 
// A continuación ejecutar la función y mostrar en pantalla: 'Suma: XX"

function sumarArray()
{
var arrayNum = [1, 23, 34];
var total;

for(let i = 0; i <= arrayNum.length; i++) 
total += arrayNum[i];

console.log('suma ' + total);
}

sumarArray();

// 7. Declarar una función que sume cada elemento del primer array con cada elemento del segundo (en la misma posición) y devuelva el array con la suma de ambos.
// A continuación ejecutar la función y mostrar en pantalla el array de la Suma al completo.  
function sumarDosArrays()
{
var arrayNum1 = [1, 23, 34];
var arrayNum2 = [6, 7, 50];
var arrayNum3 = [arrayNum1[0] + arrayNum2[0], arrayNum1[1] + arrayNum2[1], arrayNum1[2] + arrayNum2[2]]

console.log('el arrayNum3 es [' + arrayNum3 + ']')
}

sumarDosArrays();


// 8. Declarar una función en la que se pase el array siguiente como argumento. A continuación extraiga el elemento mayor y el menor del array, 
// y devuelva la diferencia entre ambos valores. 
// Ejecutar la función y mostrar el resultado.

// Ejemplo: var arrayNum1 = [1, 23, 34];
// La función devolvería 34-1 = 33

function diferenciaValoresArray()
{
var arrayNum1 = [12, 23, 34, 567, 19, 57];
var mayor = Math.max(...arrayNum1)
var menor = Math.min(...arrayNum1)
var diferencia;

console.log('el mayor es '+ mayor)
console.log('el menor es ' + menor)

diferencia = mayor - menor;

console.log('la diferencia es de ' + diferencia);
}

diferenciaValoresArray();


// 9. Dado un array, declarar una función que recoja el array como argumento y lo ordene de menor a mayor.
// Ejecutar la función y mostrar el array ordenado. 
// Nota: No se puede utilizar la función SORT de JAVASCRIPT.



function compare() 
{
var arrayNum1 = [12, 23, 34, 567, 19, 57];
arrayNum1.sort(function(a, b){return a - b});

console.log(arrayNum1.join());

}
compare();

// 10. Dado un array con números positivos y negativos, declarar una función que recoja el array como argumento y realice lo siguiente:
// La función deberá crear un array nuevo con los números positivos, ordenarlos de menor a mayor y devolver el array.
// Ejecutar la función y mostrar el array ordenado. 

// PISTA: El nuevo array deberá tener una dimensión tal que: Length(nuevo) = Length(viejo) - num_elementos_negativos



function positivos()
{
    var arrayNum1 = [12, -3, 34, 567, -19, 57, 0]; 
    
    for (let i = 0; i <= arrayNum1.length; i++){
   
        if (arrayNum1[i] >= 0)
        {
            console.log(arraynum1[i]);
        }
   
}

}

positivos();

// 11. Se dan dos números en forma de array. Se trata de declarar una función que los recoja como argumento, los sume y devuelva el array con el número SUMA.
// Ejemplo: 123 = [1,2,3]
//          458 = [4,5,6]
//   SUMA:  581 = [5,8,1]
// 
// NOTA: Por simplicidad los dos arrays deberán tener la misma dimensión. 
// PISTA: La dimensión del array de devolución sera la dimensión de los arrays de entrada + 1. Además, habrá que tener en cuenta el acarreo (la llevada). 
// Se trata de SUMAR TAL Y COMO LO HARÍAIS EN PAPEL, de derecha a izquierda.
// 

//Ejecutaremos la función y sacaremos en pantalla un texto en la forma: '123 + 458 = 581' (En el caso del ejemplo)

//Podéis hacer pruebas con diferentes números. Como ejemplo se dan los números 976 y 385. 
var arrayNum1 = [9, 7, 6];
var arrayNum2 = [3, 8, 5];