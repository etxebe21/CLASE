// 12. Dado el siguiente array de objetos.  var registros =[{sucursal: 1, idusers: 1, usuario: 'schw'},{sucursal: 1, idusers: 2, usuario: 'schw2'}];

//nregistros=[];   for(i in registros)  nregistros.push(registros[i].idusers);  console.log(nregistros);

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

// 12. Mostrar por consola todos los elementos ((Declarar una función para ello))

function mostrarElementos(){

    var elementos = [];

    for (var i = 0; i < elements.length; i++) { 
   
    
      for (var key in elements[i]) { 
      
        
          elementos.push(elements[i][key]); 
        }
      }
    }
    
    console.log("resultado :",elements); 

	


mostrarElementos();


// 13. Dado el siguiente array de objetos

// Mostrar por pantalla todos los elementos cuya cantidad (qty) sea menor de 50 ((Declarar una función para ello))


function mostrarQty()
{
	const muestra = elements.find((element, index) => {
		return element.qty < 50;
	  })
	  
	  console.log(muestra);
}

mostrarQty();

// 14. Dado el siguiente array de objetos

// Mostrar por pantalla los elementos no importados ((Declarar una función para ello))

function noImportado()
{
	const noImported = elements.filter((element, index) => {
	 return element.imported === 'false';
	})
	console.log(noImported);

}
noImportado();

// 15. Dado el siguiente array de objetos

// Mostrar por pantalla los elementos no importados cuya cantidad sea mayor de 325 (Declarar una función para ello)

function noMayor()
{

	const noImportMayor = elements.filter((element, index) => {
		return element.imported === 'false' || element.qty > 325;
	  })
	  
	  console.log(noImportMayor);

}

noMayor();

// 16. Dado el siguiente array de objetos
// Si el elemento es importado mostrar por consola el código y el precio (Declarar una función para ello)

function importado()
{
	const imporT = elements.filter((element, index) => {
		return element.imported === 'true';
	  })
	  
	  console.log(elements);
}

importado();