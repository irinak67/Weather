import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction, clearAction } from './Reducers/weather_reducer.jsx';
import './App.css';

let RunHttpFlag = true;

export const Result = ()=>{

    let weatherState = useSelector(s=>s.weather);

    
    // https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=London&aqi=no
    return <div className="Card">
        <h3><b>Name: </b></h3><h3><b>Country: </b></h3><h3><b>Temperature: </b></h3><h3><b>Humidity: </b></h3><h3><b>Cloud: </b></h3>
        <p><b>{weatherState?.lastSearthResult?.location?.name}</b></p>
        <p><b>{weatherState?.lastSearthResult?.location?.country}</b></p>
        <p><b>{weatherState?.lastSearthResult?.current?.temp_c}°C</b></p>  
        <p><b>{weatherState?.lastSearthResult?.current?.humidity}%</b></p>        
        <p><b>{weatherState?.lastSearthResult?.current?.cloud}</b></p>&nbsp;        
        <p><b>{weatherState?.lastSearthResult?.current?.condition?.text}</b></p>
        <img src={weatherState?.lastSearthResult?.current?.condition?.icon} alt=""/>
 
    </div>
}