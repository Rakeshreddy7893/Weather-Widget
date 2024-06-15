import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxkdXN0eSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1570117696793-f3aadaf6788c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fFJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL: info.temp > 15 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature={info.temp}&deg;C</div>
         <div>Humidity={info.humidity}</div>
         <div>Min Temp={info.tempMin}&deg;C</div>
         <div>Max Temp={info.tempMax}&deg;C</div>
         <div>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</div></Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}