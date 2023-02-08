// 18. Declarar una función que reciba de argumento dos números y devuelva un número aleatorio entero entre los mismos (ambos inclusive)
// Ejemplo: Si los argumentos son el 3 y el 8, la función nos deberái devolver 3, 4, 5, 6, 7, u 8.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución. 

function calculateRandomMinToMax(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 100; ++i)
{
    const result = calculateRandomMinToMax(3, 8);
    console.log(result);
}