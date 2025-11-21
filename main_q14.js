const person= {name: 'John', age: 25};
function GetKey(data={})
{
  return Object.keys(data);
}
console.log(GetKey(person))