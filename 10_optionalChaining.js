// OPTIONAL CHAINING

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

react

function DisplayName({contact}) {
    return (
        <>
            <div>{contact.name}</div>
            <div>{contact.name?.details ?? 'untitled'}</div>;

        </>

    );

}

let status = 0;

{
    status===100 && <ShowName />;
}
{
    status===200 && <ShowName />;
}
{
    status===300 && <ShowName />;
}