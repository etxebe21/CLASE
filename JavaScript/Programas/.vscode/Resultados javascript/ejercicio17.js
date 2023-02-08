// 17. Declarar una función que reciba como argumento un número y calcule un número aleatorio entero entre 0 y el número introducido (ambos inclusive)
// Ejemplo: Si el argumento es el 8, la función nos deberái devolver 0, 1, 2, 3, 4, 5, 6, 7, u 8.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución. 

function calculateRandom0ToNumber(number)
{
    return Math.floor(Math.random() * (number - 0 + 1));
}

for (let i = 0; i < 100; ++i)
{
    const result = calculateRandom0ToNumber(8);
    console.log(result);
}
