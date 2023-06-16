// async await in js

async function sunny(){
    let lucknowWeather=new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("temp is 29 degree")
        }, 2000);
    });

    let kanpurWeather=new Promise((resolve,reject)=>{
        resolve("temperture is 21 degree ")
    },4000)



    // lucknowWeather.then(alert);
    // kanpurWeather.then(alert);

    // await pause the function execution 
    console.log("fetching the  weather lucknow  started ");
    let LucknowW=await lucknowWeather;
    console.log("fetched the lucknow weather with the value  " + LucknowW);
    console.log("fetching of the kanpur weather started ");
    let KanpurW=await kanpurWeather;
    console.log("fetched the weather of kanpur with a value  " + KanpurW);
    return [LucknowW ,KanpurW];


}

console.log("weather to control room ");

let a=sunny();

a.then((value)=>{
    console.log(value);
})