//6. Declarar una función que sume los elementos del siguiente array y devuelva la suma (como valor de retorno). 
// A continuación mostrar en pantalla: 'Suma: XX"

var arrayNum = [1, 23, 34];

function sumArray(arrayNum)
{
    var sum = 0;
    for (var i = 0; i < arrayNum.length; ++i)
    {
        sum += arrayNum[i];
    }

    return sum;
}

var sum = sumArray(arrayNum);

document.write('Suma: ' + sum);