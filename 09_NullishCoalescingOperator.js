// Nullish Coalescing Operator
let x;

x = x || 'some default';

// console.log(x);

// and (cumple todo)
// or (solo 1)

function add(a, b) {
	a = a === null ? 0 : a;
	b = b === null ? 0 : b;
	return a + b;
}

// console.log(add(null, 3));

function addWithNUllish(a, b) {
	a = a ?? 0;
	b = b ?? 0;
	return a + b;
}

console.log(addWithNUllish(10));

// REACT
function DisplayName({ contact }) {
	return <div>{contact.name ?? 'untitled'}</div>;
}
