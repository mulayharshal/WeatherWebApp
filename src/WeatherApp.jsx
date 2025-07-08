import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 24.94,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    feelIsLike: 25.05,
    weather: "haze",
  });

let updateInfo=(result)=>{
    setWeatherInfo(result);
}  

  return (
    <div style={{ textAlign: "center" }}>
      <h1 >Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
