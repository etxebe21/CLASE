// 16. Dado el siguiente array de objetos

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

// Si el elemento es importado mostrar por consola el código y el precio (Declarar una función para ello)

function show1()
{
	for (var i = 0; i < elements.length; ++i)
	{
		var result = elements[i];
		if (result.imported)
		{			
			document.write('Codigo: ' + result.code + ' Precio: ' + result.price + '<br>');	
		}
	}
}

document.write('Elementos importados: <br>');
show1();