// 20.- Dado el siguiente array de objetos

var data = [
	{
		name: 'Banana',
		price: 200,
		qty: 31,
		imported: true
	},
	{
		name: 'Pomelo',
		price: 55,
		qty: 325,
		imported: false
	},
	{
		name: 'Piña',
		price: 70,
		qty: 125,
		imported: false
	}
]

 
// a) Declarar una función que recibe un objeto. 
// b) Dentro de esa función se modifica el price en base a unas tasas que son el 20%. 
// c) Devolver el objeto modificado 

function modifyPrice(object)
{
	//Modificamos el objeto original directamente
	object.price *= 1.2;
}

modifyPrice(data[0]);

console.log(data);


// d) Declarar una función que recibe ese objeto.
// e) Añadir a ese objeto un nuevo atributo id con un número aleatorio de 3 cifras + los 3 primeros caracteres del nombre 
// f) Devolver el objeto modificado 

function addId(object)
{
	const rnd3Digit = Math.floor(Math.random() * (999 - 100 + 1) + 100);
	const id = rnd3Digit.toString() + object.name.substr(0, 3);
	
	//Creamos un nuevo objeto (copia) y lo devolvemos
	const newObject = Object.assign({}, object, {id: id});
	return newObject;
	
}

const result = addId(data[0]);

console.log(result);

// g) Declarar otra función para que muestre por consola algo asi:
//		
//		id: 735Ban
//		Product: Banana
//		Price : 200
//		imported: true
//		.................


function showObject(object)
{
	console.log("id: " + object.id);
	console.log("Product: " + object.name);
	console.log("Price: " + object.price);
	console.log("imported: " + object.imported);
	
}

showObject(result);