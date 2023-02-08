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

function mult()
{
    for (var i = 1; i < 11; ++i)
    {
        for (var j = 0; j < 11; ++j)
        {
            var mult = i*j;
            document.write(i + ' * ' + j +' = '+ mult+ '<br>');
        }

        document.write('--------------------<br>');
    }
}

mult();
