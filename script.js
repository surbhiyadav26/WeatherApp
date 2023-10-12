const apikey="aa408e5baa1295f5efe2ecfa89b87809";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");


async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
else{
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +'°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity +'%';
    document.querySelector(".wind").innerHTML=data.wind.speed +'Km/h';

    if(data.weather[0].main=="Clouds"){
        document.querySelector(".weather-icon").src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector(".weather-icon").src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".weather-icon").src="images/drizzel.png";
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector(".weather-icon").src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector(".weather-icon").src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        document.querySelector(".weather-icon").src="images/snow.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

