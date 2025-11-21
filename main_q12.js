function Prom()
{
    return new Promise ((resolve, reject)=>{

        setTimeout(()=>{
           resolve("Success")

        }, 3000);

    })
}
Prom().then((result)=>{
    console.log(result);
})