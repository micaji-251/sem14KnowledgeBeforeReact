// ARRAY METHODS

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


// De los array methods expliquenlos