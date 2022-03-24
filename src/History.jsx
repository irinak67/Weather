import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction, clearAction } from './Reducers/weather_reducer.jsx';

let RunHttpFlag = true;

export const History = ()=>{

    let weatherState = useSelector(s=>s.weather);

    
    // https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=London&aqi=no
    return <div>Page History
        **
temp_c:{weatherState?.history.map((i)=>{
    return <div>{i.location.name}-{i.location.country} : temp_c:{i.current.temp_c} humiditi:{i.current.humidity}</div>
})}<br/>
 
    </div>
}