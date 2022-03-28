import React from 'react';
import { useSelector } from "react-redux";

export const HistoryBody = ()=>{
    let historyState = useSelector(s=>s.weather);
    let number = 0;          
    return( 
        <div>       
            {historyState ? (historyState.history.map((i)=>{
                number++;                
                return (<div className='historyBody' key={number}>                   
                    <p>{number}</p>   
                    <p>{i.location?.name}</p> 
                    <p>{i.location?.country}</p> 
                    <p>{i.current?.temp_c}°C</p>
                    <p>{i.current?.humidity}%</p>
                    <img src={i.current?.condition?.icon} alt="" height={40} width={40}/>
                    <br/></div>);                    
                })) : (<></>)
            } 
    </div>)
}
