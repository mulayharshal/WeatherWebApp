import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="19a4e0cc9bd77bd3bad8b7f0a5d01974";

    let getWeatherInfo= async()=>{
        try{

        
        let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data =await response.json();
        // console.log(data);

        let  result ={
            city:city,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelIsLike: data.main.feels_like,
            weather: data.weather[0].description,
            
        }
        console.log(result);
        return result;
        }
        catch{
            throw err;
        }
    }

   
    let handlechange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit= async(event)=>{
        try{

        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
        
        setError(false);
        
        }
        catch(err){
            setError(true);
        }
    }
   return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" className="searchInput" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
                <br/><br/>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such Place exists!</p>}
            </form>
        </div>
    )
}