// DESTRUCTURING

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

function makeCalculationWithDSWithSH({x, y:d, z=5}){

    return Math.floor((x+d+z)/3);
}

console.log(makeCalculationWithDSWithSH({x:10, y:5, z:3}));

function sayHello({message}){
    return <div>{message}</div>
}

<sayHello message="Esto es un mensaje" />