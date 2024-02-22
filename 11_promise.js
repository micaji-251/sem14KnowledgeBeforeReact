// import axios from 'axios';
// PROMISE

// new Promise(resolve, (reject) => {
// 	setTimeout(() => {
// 		resolve('esuelto');
// 	}, 3000);
// });

// FETCH - PROMISE
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

readData();

const readDataWithAxios = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		if (response.status === 200) {
			// Pintar la informacion en el HTML
		}
	} catch (error) {
		console.log(error);
	}
};
