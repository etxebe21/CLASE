// 21.- Dado el siguiente array de objetos

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

 
// a) Crear la clase Fruit que sirva como plantilla para crear las frutas del array data

class Fruit
{
	constructor(name, price, qty, imported)
	{
		this.name = name;
		this.price = price;
		this.qty = qty;
		this.imported = imported;
		
	}
}
// b) Crear 3 objetos de la clase Fruit con los datos del array data.


const banana = new Fruit("Banana", 200, 31, true);
const pomelo = new Fruit("Pomelo", 55, 325, false);
const pina   = new Fruit("Piña", 70, 125, false);

// c) Crear un array vacío fruits y añadir los objetos creados.

const fruits = [];

fruits.push(banana);
fruits.push(pomelo);
fruits.push(pina);

// d) Crear un nuevo objeto con los siguientes campos y añadirlo al array:
//   name: 'Manzana',
//		price: 80,
//		qty: 225,
//		imported: true
const manzana = new Fruit("Manzana", 80, 225, true);
fruits.push(manzana);

console.log(fruits);

// e) Crear una función que muestre en pantalla todos los objetos con precio mayor que 70, en la siguiente forma:
//  name: Banana  Price: 200


function showPriceAbove70()
{
	for (let i = 0; i < fruits.length; ++i)
	{
		const fruit = fruits[i];
		if (fruit.price > 70)
		{
			console.log("name: " + fruit.name + " Price: " + fruit.price);
		}
	}
}

showPriceAbove70();


// f) Eliminar del array fruits los elementos con precio mayor que 80 y mostrar el nuevo array con los cambios. 

function removePriceAbove80()
{
	//Recorremos el array de final al principio. Cada vez que se borra un elemento la dimensión del array es 1 unidad menos y hay que tenerlo en cuenta
	for (let i = fruits.length - 1; i >= 0; --i)
	{
		const fruit = fruits[i];
		if (fruit.price > 80)
		{
			fruits.splice(i, 1);
		}
	}
}

console.log("Borrado de elementos con precio mayor que 80 y muestra");
console.log("------------------------------------------------------");

removePriceAbove80();
console.log(fruits);