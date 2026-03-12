const apiKey = "145a633338374ea1b0e113024261203";

async function getWeather(){

const city = document.getElementById("cityInput").value;

if(city === ""){
alert("Please enter a city");
return;
}

const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

try{

const response = await fetch(url);
const data = await response.json();

const weatherHTML = `
<h2>${data.location.name}, ${data.location.country}</h2>
<div class="temp">${data.current.temp_c}°C</div>
<div class="condition">${data.current.condition.text}</div>

<div class="extra">
Humidity: ${data.current.humidity}% <br>
Wind: ${data.current.wind_kph} kph
</div>
`;

document.getElementById("weatherInfo").innerHTML = weatherHTML;

}catch(error){

document.getElementById("weatherInfo").innerHTML = "City not found";

}

}