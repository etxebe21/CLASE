// 3.- Declarar una función que muestre los números impares de 0 a 100. Mostrar el resultado de la función
// Ejecutar la función. 

function impares()
{
    for (var i = 0; i < 101; ++i)
    {
        if (i % 2 != 0)
        {
            document.write(i + '<br>');
                
        }        

    }
}

impares();