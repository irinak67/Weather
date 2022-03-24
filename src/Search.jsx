import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchAction, addToHistoryAction} from './Reducers/weather_reducer.jsx';

let RunHttpFlag = true;

export const Search = () => {

    const [state, setState] = useState('London');
    const [refreshState, setRefreshState] = useState(0);

    const dispatchNow = useDispatch();
    const weatherState  = useSelector((s) => s.weather);

    const refresh = () => {
        setRefreshState(Math.random());
    }

    const load = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=7a35477bff9a493b89d74926222103&q=${state}&aqi=no`)
                .then(res => res.json())
                .then((result) => 
                {
                    console.log(result); 
                    
                    dispatchNow(SearchAction(result));
                    // dispatchNow(addToHistoryAction(result));

                },
                    (error) => 
                    {
                        alert(error);
                    })
                }

    useEffect(load, [RunHttpFlag]);

    return (
        <div>
            <input onChange={(e)=>{
                setState(e.target.value);            
            }}></input> 
            <br/><br/>

            <button className="btn" onClick={()=>{
              RunHttpFlag = !RunHttpFlag;
              refresh();           
           }}>Get</button>

          


{/* 
        <p><b>Country: </b>{weatherState?.location?.country}</p>
        <p><b>Temperature: </b>{weatherState?.current?.temp_c}°C</p>  
        <p><b>Humidity: </b>{weatherState?.current?.humidity}%</p>        
        <p><b>Cloud: </b>{weatherState?.current?.cloud}</p> */}
                            
        </div>
    );
}
// export default Search;