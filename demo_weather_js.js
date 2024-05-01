const API_KEY = "6a0a87c7481ce10e1b6527d4f53b6326";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}  °C`;

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){

    try{
        let city = "goa";
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        
        const data = await response.json();
        console.log("Weather data:-> ", data);
    
        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error Found",err);
    }
}

async function getCustomWeatheDetails(){
   try{
        let latitude = 17.6333;
        let longitude = 18.3333;

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        let data = await response.json();

        console.log(data);

        renderWeatherInfo(data);
   }
   catch(err){
        console.log("Error Found",err);
   }
}


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    console.log(lat);
    console.log(lon);
}