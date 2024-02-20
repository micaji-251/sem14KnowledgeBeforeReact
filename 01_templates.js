// TEMPLATE LITERALES

const namePerson = 'Diego';
const sayHello = 'Hello';
// BEFORE
console.log(sayHello + ' ' + namePerson);
// TODAY
console.log(`${sayHello} ${namePerson}`);

// REACT

function Box({className, ...props}){
    return <div className={`box ${className}`} />;
}