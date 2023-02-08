// 19. Declarar una función que simule una tirada de un dado. Recibirá como argumento el número de caras del dado.
// Ejemplo: Si el número de caras es 20, el argumento será 20 y la función nos devolverá un resultado aleatorio del dado.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución. 

function calculateRandomDice(number)
{
    return Math.floor(Math.random() * (number - 1 + 1) + 1);
}

for (let i = 0; i < 100; ++i)
{
    const result = calculateRandomDice(8);
    console.log(result);
}