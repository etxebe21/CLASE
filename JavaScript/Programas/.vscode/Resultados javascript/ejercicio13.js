// 13. Dado el siguiente array de objetos

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

// Mostrar por pantalla todos los elementos cuya cantidad (qty) sea menor de 50 ((Declarar una función para ello))

function show1()
{
	for (var i = 0; i < elements.length; ++i)
	{
		var result = elements[i];
		if (result.qty < 50)
		{
			var show = JSON.stringify(result);
			document.write(show + '<br>');			
		}
	}
}

document.write('Los elementos con qty > 50 son: <br>');
show1();

