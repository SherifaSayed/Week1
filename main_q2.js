const readline = require('readline');
const r1= readline.createInterface
(
    {input : process.stdin , output: process.stdout}
);
r1.question("write a value ", (answer)=>{
    if (answer==0||answer==false||answer=="")
        console.log("invalid");
        
})