import Card from '@mui/material/Card';

// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';

// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import SunnyIcon from '@mui/icons-material/Sunny';

// import "./InfoBox.css"

export default function InfoBox({ info }) {
    let HOT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    let RAIN_URL = "https://images.unsplash.com/photo-1561634666-669fe33c3d0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity >= 80 && info.temp > 15 ? RAIN_URL : info.temp < 15 ? COLD_URL : HOT_URL}
                    title="city"
                />
                <CardContent>
                    <Typography style={{ textAlign: "left" }} gutterBottom variant="h5" component="div" >
                        <span ><b>{info.city} {info.humidity >= 80 && info.temp > 15 ? <ThunderstormIcon /> : info.temp < 15 ? <AcUnitIcon /> : <SunnyIcon />}</b></span>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div style={{ textAlign: "left" }}>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Min-Temperature : {info.temp_min}&deg;C</p>
                            <p>Max-Temperature : {info.temp_max}&deg;C</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Weather can be described as {info.weather} and feels like {info.feels_like}&deg;C</p>
                        </div>

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}