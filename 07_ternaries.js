// TERNARIES

const user = 'Diego';

let message;

if(user){
    message='Estas logeado';
} else{
    message='No estas logeado'
}

user ? (message='Estas logeado'):(message='No estas logeado');

message = user? 'Estas logeado' : 'No estas logeado'

console.log(message);

function TeddyBearList({teddyBears}){
    return(
        <div>
            {
                teddyBears.length ? <p>Iteracion</p>:<p>No hay Elementos</p>
            }
        </div>
    )
}

<TeddyBearList teddyBears={[]} />;
