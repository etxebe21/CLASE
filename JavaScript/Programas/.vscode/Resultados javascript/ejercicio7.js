// 7. Declarar una función que sume cada elemento del primer array con cada elemento del segundo (en la misma posición) y devuelva el array con la suma de ambos.
// A continuación ejecutar la función y mostrar en pantalla el array de la Suma al completo.  

var arrayNum1 = [1, 23, 34];
var arrayNum2 = [6, 7, 50];

function sumArrays(arr1, arr2)
{
    var arr = [0, 0, 0];
    for (var i = 0; i < arr1.length; ++i)
    {
        arr[i] = arr1[i] + arr2[i];
        
    }

    return arr;
}


var arr = sumArrays(arrayNum1, arrayNum2);


document.write('Suma: ['  + arr + ']');