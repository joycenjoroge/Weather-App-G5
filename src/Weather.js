import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
    const data = await response.json();
    setWeatherData(data);
  }

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
