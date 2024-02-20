// PARAMETERS DEFAULTS

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