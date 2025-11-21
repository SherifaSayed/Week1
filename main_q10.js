const person= {name: 'John', age: 25};


function DestructSomeData(data)
{
    const {name,age}=data;
    return `${name} is ${age} years old`;
}

console.log(DestructSomeData(person));

//or you want it like this اني ابعتهم منفردين مش كااوبجيكت  !!
let name = person.name;
let age=person.age
console.log(DestructSomeData({name, age}));