// 10. Dado un array, declarar una función que recoja el array como argumento y lo ordene de menor a mayor.
// Ejecutar la función y mostrar el array ordenado. 
// Nota: No se pueden utilizar funciones predefinidas de JAVASCRIPT.

var arrayNum1 = [12, 23, 34, 567, 19, 57];

function sort(array)
{
	for (i = 0; i < array.length - 1; i++) 
    {
        for (j = i+1; j < array.length; j++) 
        {      	
            if (array[i] > array[j]) {

                //Intercambiamos los dos elementos del array
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
 
        }
    }
    return array;
}

var arraySorted = sort(arrayNum1);

document.write('Array ordenado: ['  + arraySorted + ']');