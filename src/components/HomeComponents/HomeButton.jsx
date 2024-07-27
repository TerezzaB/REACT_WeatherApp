import React from "react";
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate();

    const weatherRoute = () => {
        navigate('/weather');
    };

    return(
        <>
            <button onClick={weatherRoute} className="bg-purple-800 hover:bg-purple-700 rounded-2xl p-5 font-bold">Continue to App</button>
        </>
    )
}