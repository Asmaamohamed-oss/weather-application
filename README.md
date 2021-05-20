
# Weather-Journal App Project

this progect is an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

## Table of Contents
this project including two part server side and client side 

1. server side: 
2.include the packages Express, Body-Parser Cors.
3. sever side incluse two routs , Get route that returns the projectData object in server code.
4. POST route that adds incoming data to projectData.

5 client side : 
6. include three functions : getWeatherDemo , postData ,updateUi
7. getWeatherDemo is an async function that uses fetch() to make a GET request to the OpenWeatherMap API.
8. postDat is an async function that makes POST request

9. updateUi  another Promise that updates the UI dynamically ,  async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM and then update their necessary values to reflect the dynamic values for:Temperature
Date
User input



### project information

* Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked

``` javascript 
generate.addEventListener('click' , weatherApp);
```

* chaning the three functions together : by using .then()to chain the getWeatherDemo with postData so we can take the data from the getAppData to the postData 

``` javascript 
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

```


* updates the UI dynamically 
``` javascript
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
}
```


* what i used for buliding this page?

* async function.

* feth().

* try and catch

* ES6 const and let.

* ES6 arrow functions.



####  important files in the  project

1. website folder
    
    -app.js
    -index.html
    -style.css

2. server.js
