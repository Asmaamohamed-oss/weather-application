/* Global Variables */


const api = {
    base : 'http://api.openweathermap.org/data/2.5/',
     key :  '663c565e380a3473ec9ab5cda10eda5d',
}
let serverUrl = 'http://localhost:8000/';
const entryholder = document.getElementById('entryHolder');
const generate = document.getElementById('generate');
let zipCode = document.getElementById('zip');
let feeling = document.getElementById('feelings');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1+'.'+ d.getDate()+'.'+ d.getFullYear();

// data object 
dataObj = {};



// Create an even listner with callback function to execute when it clicked
generate.addEventListener('click', weatherApp); 

function weatherApp  () {
    if(zipCode.value !== "" ){

        //calling the getAppData function
        getAppData();

         dataObj = {
            date:newDate,
            feeling : feeling.value
        };

    } else{
        alert('please enter zip code')
    };
};


// Get request to OpenWeatherMap API

async function getAppData(){

     fetch(`${api.base}forecast?zip=${zipCode.value}&appid=${api.key}&units=metric`)

     // chaining the promises
     .then((response)=> response.json())
    .then((data) => {
        dataObj.temp = data.list[0].main.temp.toFixed(0);
        postAppData(dataObj)
        updateAppUi();
    })
}


// post data
async function postAppData(data){
    let response = await fetch(`${serverUrl}add`,{
        method : 'POST',
        credentials : "same-origin",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(data)
    });
    
    try{
        return await response.json();
    }
    catch(erorr){
        console.log('error', error)
    }

}



// this function retrieve data from the app
async function updateAppUi (){
    const  res = await fetch(`${serverUrl}all`);
    try{
        const data =  await res.json();
        // updates the UI dynamically
        const updateElements = `
        <div id = "date"> date: ${data.date}</div> 
        <div id = "temp"> temperature: ${data.temp} &#176 c</div>
        <div id = "content"> I'm feeling : ${data.feeling}</div>
        `;
        entryholder.innerHTML = updateElements;
    }catch(error){
        console.log('error', error);
    }
}





