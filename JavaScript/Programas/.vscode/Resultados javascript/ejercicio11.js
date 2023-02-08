// 11. Dado un array con números positivos y negativos, declarar una función que recoja el array como argumento y realice lo siguiente:
// La función deberá crear un array nuevo con los números positivos, ordenarlos de menor a mayor y devolver el array.
// Ejecutar la función y mostrar el array ordenado. 

// Nota: No se pueden utilizar la clase ARRAY ni funciones predefinidas de JAVASCRIPT (PUSH, etc..).
// PISTA: El nuevo array deberá tener una dimensión tal que: Length(nuevo) = Length(viejo) - num_elementos_negativos

var arrayNum1 = [12, -3, 34, 567, -19, 57, 0]; 



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


function extractPositiveSorted(array)
{
    //Contador de numeros positivos
    var contPositivos = 0;
    for (i = 0; i < array.length; i++) 
    {
        if (array[i] >= 0)
        {
            contPositivos++;
        }
    }
    console.log(contPositivos);

    //Creamos un array de longitud = numPositivos
    var arrayPositivos = new Array(contPositivos);

    //contados para introducir elementos en el nuevo array
    var contArrayNuevo = 0;
    for (i = 0; i < array.length; i++) 
    {       
        if (array[i] >= 0)
        {
            arrayPositivos[contArrayNuevo] = array[i];
            contArrayNuevo++;  
        }
    }

    //Ordenamos el array creado
    var arraySorted = sort(arrayPositivos);

    return arraySorted;

}

var arraySorted = extractPositiveSorted(arrayNum1);

document.write('Numero de elementos del array nuevo: '  + arraySorted.length + '<br>');

document.write('Array ordenado: ['  + arraySorted + ']');




