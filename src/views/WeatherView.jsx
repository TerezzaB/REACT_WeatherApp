import React from "react";
import WetherInput from "../components/WeatherComponents/WeatherInput";
import WeatherTable from "../components/WeatherComponents/WeatherTable";
import WeatherInput from "../components/WeatherComponents/WeatherInput";


export default function WeatherView() {
    return(
        <>
            <WeatherInput />
            <WeatherTable />
        </>
    )
}