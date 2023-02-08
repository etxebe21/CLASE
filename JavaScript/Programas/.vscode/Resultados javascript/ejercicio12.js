// 12. Dado el siguiente array de objetos.

var elements = [
	{
		code: 'SKI-203',
		name: 'Banana',
		price: 200,
		qty: 31,
        imported: true,
        type: 'Tropical'
	},
	{
		code: 'SFI-233',
		name: 'Pomelo',
		price: 55,
		qty: 325,
		imported: false,
        type: 'Tropical'
	},
	{
		code: 'JKI-453',
		name: 'Piña',
		price: 70,
		qty: 125,
		imported: false,
        type: 'Oceanic'
	},
	{
		code: 'CDC-113',
		name: 'Coco',
		price: 120,
		qty: 25,
		imported: true,
        type: 'Oceanic'
	},
	{
		code: 'SWI-265',
		name: 'Papaya',
		price: 200,
		qty: 725,
		imported: true,
        type: 'Tropical'
	}
];

// Mostrar por consola todos los elementos ((Declarar una función para ello))

function showAll()
{
	for (var i = 0; i < elements.length; ++i)
	{

		var show = JSON.stringify(elements[i]); //Para convertir el objeto en STRING y poderlo ver en pantalla
		document.write(show + '<br>');	
	}
	
}

showAll();
