import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchAction, addToHistoryAction} from '../Reducers/weather_reducer';

let RunHttpFlag = true;

export const Search = () => {

    const [state, setState] = useState("");
    const [refreshState, setRefreshState] = useState(0);

    const dispatchNow = useDispatch();
    const weatherState  = useSelector((s) => s.weather);

    const refresh = () => {
        setRefreshState(Math.random());
    }

    useEffect(() => {
        if(state !== ""){
        fetch(`https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=${state}&aqi=no`)
                .then(res => res.json())
                .then((result) => { 
                    console.log(result);                 
                    dispatchNow(SearchAction(result));
                    dispatchNow(addToHistoryAction(result));
                },
                    (error) => 
                    {
                        alert(error);
                    }
                    );
                }            
         }, [RunHttpFlag]);

    return (
        <div>           
            <input className="input" 
                onChange={(e)=>{
                    setState(e.target.value);            
                }}>
            </input> 
            <br/><br/>

            <button className="btn" onClick={()=>{
              RunHttpFlag = !RunHttpFlag;
              refresh();                         
           }}> </button>
                        
        </div>
    );
}
