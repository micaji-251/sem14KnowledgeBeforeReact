# CONOCIMIENTOS PREVIOS A REACT

## TEMPLATE LITERALS

Es el uso de los ${} para no hacer separar el texto entre variables y string

const namePerson = 'Diego';
const sayHello = 'Hello';

// BEFORE
console.log(sayHello + ' ' + namePerson);

// TODAY - template literals es el uso de los ${} para no hacer separar
console.log(`${sayHello} ${namePerson}`);

// REACT

function Box({className, ...props}){

    return <div className = {`box ${className}`} ></div>;
<!-- } -->


## SHORT HAND PROPERTY NAMES

ACORTAR LA CREACION DE OBJETOS

  

const a = 'SayHello';
const b = 50;
const c = [1,2,3];

  

// BEFORE
const ObjectLiteral = {
    a: a,
    b: b,
    c:c,
}

  

console.log(ObjectLiteral);

const objectLiteralWithShorhand={
    a,
    b,
    c,
};

console.log(objectLiteralWithShorhand);


## ARROW FUNCTIONS

Functiones flecha, para acortar en una linea la funcion, su estructura varia sobre las funciones normales, const nombreFunction = (variableFunction) => variableFunction*2;

// BEFORE

function addTen(a){

    return a +10;

}

function readFive(){

    return 5;

}

function divideNumber(a,b){

    return a/b;

}

// TODAY

  

const addTenWithAF= (a) => a+10;
const readFiveWithAF= () => 5;
const divideNumberWithAF= (a,b) => a/b;


## DESTRUCTURING

Destructuring, permite el reducir el tamaño de la variable de un objeto literal al llamarla. Se puede renombrar la propiedad, se puede agregar valores de default.

// {x:10, y:5, z:3}

// BEFORE

function makeCalculation(obj){

    const x = obj.x;
    const d = obj.y;
    const z = obj.z === undefined ? 0: obj.z;
    return Math.floor((x / d / z)/3 );
}

console.log(makeCalculation({x:10, y:5, z:3}));

function makeCalculationWithDS(obj){

    const {x, y:d, z} = obj;
    return Math.floor((x+d+z)/3);
}
console.log(makeCalculationWithDS({x:10, y:5, z:3}));
// y:d propiedad y con alias d

## PARAMETER DEFAULTS

Establecer parametros por defecto, esto permite mantener los eventos en caso de un valor no obtenido.

// BEFORE

function addNums(a,b){

    b = b === undefined ? 0 : b;
    return a+b;
}

console.log(addNums(10));

// TODAY
function addNumsWithPD(a = 0,b = 0){

    return a +b;
}
console.log(addNumsWithPD());
const addNumberWithAF = (a=10,b=0) => a+b;
console.log(addNumberWithAF());

## ARRAY METHODS

// Del arreglo que tenemos, obtenemos la información, la modificamos, la eliminamos, etc.

let arrayExample = [1,2,3,4];

console.log('arrayExample = [1,2,3,4]');
// 1. find - encuentra el primer elemento que cumple la condición

let result = arrayExample.find((item)=> item >= 3)

console.log(`1. find - encuentra el primer elemento que cumple la condición, condicion >=3, resultado: ${result}`);


// 2. some - busca si existe al menos un elemento que cumpla la condición

let result2 = arrayExample.some((item)=>item===3);
console.log(`2. some - busca si existe al menos un elemento que cumpla la condición, condicion ===3, resultado: ${result2}`);

// 3. every - verifica si todos los elementos de la funcion cumple la condicion

let result3 = arrayExample.every((item)=>item>=0);
console.log(`3. every - verifica si todos los elementos de la funcion cumple la condicion, condicion >=0, resultado: ${result3}`);

// 4. includes - devuelve una boolean si es que en el array se encuentra el valor

let result4 = arrayExample.includes(2);
console.log(`4. includes - devuelve una boolean si es que en el array se encuentra el valor, condicion includes 2, resultado: ${result4}`);

// 5. map - modifica cada elemento de un array para crear un array nuevo

let result5 = arrayExample.map((item)=>item*2);
console.log(` 5. map - modifica cada elemento de un array para crear un array nuevo, condicion *2, resultado: ${result5}`);

// 6. filter - modifica el array removiendo los elementos que no cumplen con la condicion

let result6 = arrayExample.filter((item)=>item>2);
console.log(`6. filter - modifica el array removiendo los elementos que no cumplen con la condicion, condicion >2, resultado: ${result6}`);

// 7. reduce - devuelve una constante que resulta de tratar el array segun la condición señalada

let result7 = arrayExample.reduce((accum,item)=>accum+item);

console.log(` 7. reduce - devuelve una constante que resulta de tratar el array segun la condición señalada, condicion acumulador, resultado: ${result7}`);


## Nullish Coalescing Operator ??

Se usa para validar data por recibir, en caso esta este nula o undefined

function addWithNUllish(a, b) {
	a = a ?? 0;
	b = b ?? 0;
	return a + b;
}

console.log(addWithNUllish(10));


## OPTIONAL CHAINING

Se usa para validar data por recibir, en caso el valor no se encuentre se corta el error, para dar un undefined

const personDetails={
    name: 'Diego',
    age:30,
    banks:{
        name:'interbank',
        amount:{
            money:1000,
        }
    }
}

console.log(personDetails.banks?.amount.money);


## PROMISES

Se utiliza para eventos asincronicos que pueden demorar en obtenerse, por lo que esperan un resultado. La promesa puede estar en estado pending, fulfilled o rejected.

Para el obtener información a partir de un fetch se generaran dos promesas, una inicial para la data y una segunda para la respuesta.

const readData = () => {
	const data = fetch('https://jsonplaceholder.typicode.com/users')
		.then((data) => {
			// console.log(data);
			return data.json();
			// console.log(data.json());
		})
		.then((response) => console.log(response))
		.catch((error) => console.log(error));
	// console.log(data);
};