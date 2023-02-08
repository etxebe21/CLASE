// 9. Se dan dos números en forma de array. Se trata de declarar una función que los recoja como argumento, los sume y devuelva el array con el número SUMA.
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

function sumArrays(arr1, arr2)
{
    //Creamos un array suma con la longitud de arr1 (o arr2) + 1
    var arraySuma = new Array(arr1.length + 1);
    
    //La llevada la iniciamos a 0
    var acarreo = 0;

    //Contador del array suma empezará en la última posición - 1
    var contArraySuma = arraySuma.length - 1;

    //Recorremos los arrays desde el último elemento al primero
    for (var i = arr1.length - 1; i >= 0; --i)
    {
        //sumamos las cifras correspondiente. En la primera suma la llevada siempre será 0
        var sumaCifra = arr1[i] + arr2[i] + acarreo;
        

        //vemos si hay llevada
        if (sumaCifra > 9)
        {
            acarreo = 1;  //Hay llevada
        }
        else
        {
            acarreo = 0;  //No hay llevada
        }


        //Cifra actual. Resto de la division por 10
        arraySuma[contArraySuma] = sumaCifra % 10;
        contArraySuma--; //Nos movemos al siguiente elemento

        //Si estamos en la última suma tenemos que añadir las 2 cifras 
       
        if (i == 0)  //Añadimos la decena
        {
            //Dividimos entre 10 y cogemos sólo la parte entera para coger la decena (Ejemplo: 13 - Cogeriamos el 1)
            arraySuma[0] = Math.trunc(sumaCifra / 10);
        }
        
    }

    return arraySuma;
}

var arrSuma = sumArrays(arrayNum1, arrayNum2);

document.write('Array 1   : ['  + arrayNum1 + '] <br>');
document.write('Array 2   : ['  + arrayNum2 + '] <br>');
document.write('Array suma: ['  + arrSuma + '] <br>');


