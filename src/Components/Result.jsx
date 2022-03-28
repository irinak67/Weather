import { useSelector } from "react-redux";
import '../App.css';

export const Result = ()=>{

    let weatherState = useSelector(s=>s.weather);
    
    return <div className="Card">         
        <h3><b>Name: </b></h3><h3><b>Country: </b></h3><h3><b>Temperature °C: </b></h3><h3><b>Humidity %: </b></h3><h3><b>Cloud: </b></h3>
        <p><b>{weatherState?.lastSearthResult?.location?.name}</b></p>
        <p><b>{weatherState?.lastSearthResult?.location?.country}</b></p>
        <p><b>{weatherState?.lastSearthResult?.current?.temp_c}</b></p>  
        <p><b>{weatherState?.lastSearthResult?.current?.humidity}</b></p>        
        <p><b>{weatherState?.lastSearthResult?.current?.cloud}</b></p>
        <img src={weatherState?.lastSearthResult?.current?.condition?.icon} alt=""/>&nbsp;        
        <p><b>{weatherState?.lastSearthResult?.current?.condition?.text}</b></p>
     
    </div>
}