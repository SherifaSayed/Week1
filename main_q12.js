function Prom()
{
    return new Promise ((resolve, reject)=>{

        setTimeout(()=>{
           resolve("Valid")

        }, 3000);

    })
}
Prom().then(()=>{
    console.log("Success");
})