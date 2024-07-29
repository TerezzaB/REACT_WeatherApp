import React from 'react';

export default function WeatherTable({ weather, error }) {
  if (error) {
    return <div>{error}</div>;
  }

  if (!weather) {
    return <div>No weather data available.</div>;
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (°C)</th>
          <th>Humidity (%)</th>
          <th>Weather</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{weather.name}</td>
          <td>{weather.main.temp}</td>
          <td>{weather.main.humidity}</td>
          <td>{weather.weather[0].description}</td>
        </tr>
      </tbody>
    </table>
  );
}
