// 17. Declarar una función que reciba como argumento un número y calcule un número aleatorio entero entre 0 y el número introducido (ambos inclusive)
// Ejemplo: Si el argumento es el 8, la función nos deberái devolver 0, 1, 2, 3, 4, 5, 6, 7, u 8.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución. 

function aleatorio1(num1, num2) 
{


    num1 = 0;
    var numPosibilidades = num2- num1;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return num1 + aleatorio;
}
console.log('el número es ' + aleatorio1(0,7));





// 18. Declarar una función que reciba de argumento dos números y devuelva un número aleatorio entero entre los mismos (ambos inclusive)
// Ejemplo: Si los argumentos son el 3 y el 8, la función nos deberái devolver 3, 4, 5, 6, 7, u 8.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución. 

function aleatorio2(inferior, superior) {

    for (i = 0; i <100; i++)
    {
    var numPosibilidades = superior - inferior;
   
    aleatorio = Math.floor(Math.random()*numPosibilidades +1);
    return inferior + aleatorio;}
}
console.log('el número es ' + aleatorio2(2,9));
 
aleatorio2();


// 19. Declarar una función que simule una tirada de un dado. Recibirá como argumento el número de caras del dado.
// Ejemplo: Si el número de caras es 20, el argumento será 20 y la función nos devolverá un resultado aleatorio del dado.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución. 

function tirarDado(num1,num2)
{
for (i = 0; i <100; i++)
{
num1= 20;
num2 = Math.floor(Math.random()*num1+1);
console.log(num2);
}
}


tirarDado();