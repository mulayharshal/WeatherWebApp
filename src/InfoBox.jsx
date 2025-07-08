import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const init_url = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  
  const Hot_url="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
    const cold_url="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ID6SPra-gNgAYY7F9p_7_eVLgoxZJeD3N95Nu3LOY9I=";
    const rain_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card id="box" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?rain_url: info.temp>15?Hot_url:cold_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity>80?<ThunderstormIcon/>: info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <hr />
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p> <b>Temprature </b>= {info.temp}&deg;C</p>
              <p><b>Humadity </b>= {info.humidity}</p>
              <p><b>Min temp🔻</b> = {info.tempMin}&deg;C</p>
              <p><b>Max temp🔺</b> = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i style={{color:"orange"}}> {info.weather} </i>and feels
                like {info.feelIsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
