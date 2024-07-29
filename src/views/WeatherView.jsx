import React, { useState } from "react";
import axios from 'axios';
import WeatherTable from "../components/WeatherComponents/WeatherTable";
import WeatherInput from "../components/WeatherComponents/WeatherInput";


export default function WeatherView() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);


    const fetchWeather = async (city) => {
        try {
            const API_KEY = '6bfb79595889816b6fd544550f1e529b';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: 'metric'
                }
            });
            setWeather(response.data);
            setError(null);
        }
        catch {
            setError('Something gone wrong!');
            setWeather(null);
        }
    };

    const handleAddCity = (newCity) => {
        setCity(newCity);
        fetchWeather(newCity);
    }

    return(
        <>
            <WeatherInput onAddCity={handleAddCity}/>
            <WeatherTable weather={weather} error={error} />
        </>
    )
}