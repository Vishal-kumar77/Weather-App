import SearchBox from "./SearchBox"

import InfoBox from './InfoBox'
import { useState } from "react"


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 30.93,
        temp_min: 30.93,
        temp_max: 30.93,
        humidity: 63,
        feels_like: 35.46,
        weather: "broken clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateWeatherInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}