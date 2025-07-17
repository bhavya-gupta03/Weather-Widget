import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const HOT_URL = "https://www.leinsterleader.ie/resizer/640/-1/true/GN4_DAT_9815138.jpg--sunny_weather_is_predicted_for_co__kildare_today.jpg";
    const COLD_URL = "https://www.shutterstock.com/image-photo/cityscape-during-heavy-snowfall-streets-600nw-2563168557.jpg";
    const RAIN_URL = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?semt=ais_hybrid&w=740";
    
    return (
        <div className="infoBox" style={{textAlign: "center"}}>
            <h1>Weather Info</h1>
            <div className="cardContainer" style={{display: "flex", justifyContent: "center"}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : (info.temp > 20 ? HOT_URL : COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/>)}
                            <br />
                            <b>{info.city.toUpperCase()}</b>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'black', opacity: 0.7, textAlign: "left" }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temperature = {info.tempMin}&deg;C</p>
                            <p>Max Temperature = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}