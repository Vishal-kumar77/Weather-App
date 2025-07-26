
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import "./Searchbox.css";
import { useState } from 'react';

export default function SearchBox({ updateWeatherInfo }) {
    let [city, setCity] = useState("");

    let [err, setErr] = useState(false);

    let APIURL = import.meta.env.VITE_APIURL


    let APIKEY = import.meta.env.VITE_APIKEY  // provided by openweather agter sign in 

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${APIURL}?q=${city}&appid=${APIKEY}&units=metric`);// API call using geocoder api in openweather
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    async function handleOnSubmit(event) {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let updatedInfo = await getWeatherInfo();
            console.log(updatedInfo);
            updateWeatherInfo(updatedInfo);
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className='Searchbox' >
            <h3>Search for weather</h3>
            <form onSubmit={handleOnSubmit} className='searchBox'>
                <TextField id="outlined-basic" label="City Name " variant="outlined" value={city} onChange={handleCityChange} required></TextField>
                <br />
                <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
            {err && <p style={{ color: "red" }}>Place you are looking for doesn't exist</p>}
        </div>
    )
}