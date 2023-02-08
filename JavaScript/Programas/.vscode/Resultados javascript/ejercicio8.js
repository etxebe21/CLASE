// 8. Declarar una función en la que se pase el array siguiente como argumento. A continuación extraiga el elemento mayor y el menor del array, 
// y devuelva la diferencia entre ambos valores. 
// Ejecutar la función y mostrar el resultado.

// Ejemplo: var arrayNum1 = [1, 23, 34];
// La función devolvería 34-1 = 33

var arrayNum1 = [12, 23, 34, 567, 19, 57];

function difMayorMenor(array)
{
    //Extraemos el mayor
    var mayor = array[0];
    for (var i = 1; i < array.length; ++i)
    {
        if (array[i] > mayor)
        {
            mayor = array[i];
        }       
    }

    //Extraemos el menor
    var menor = array[0];
    for (var i = 1; i < array.length; ++i)
    {
        if (array[i] < menor)
        {
            menor = array[i];
        }       
    }

    var ret = mayor - menor;

    return ret;
}

var diferencia = difMayorMenor(arrayNum1);
document.write("La diferencia entre el elemento mayor y el menor es: " + diferencia);