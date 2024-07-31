import React from 'react';

export default function WeatherTable({ weather, error }) {
  if (error) {
    return <div>{error}</div>;
  }

  if (!weather) {
    return <div>No weather data available.</div>;
  }

  return (
    <>
        <div className="flex flex-col">
            <div className="text-3xl mb-5">{weather.name}<span className="text-xl ml-5">({weather.sys.country})</span></div>
            <div className="text-8xl mb-5">{weather.main.temp} <span className="text-xl align-top">°C</span></div>
            <div className="text-2xl mb-5"><span className="font-bold">Humidity: </span>{weather.main.humidity} %</div>
            <div className="text-2xl"><span className="font-bold">Weather: </span>{weather.weather[0].description}</div>
        </div>
    </>
  );
}
