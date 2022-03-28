import React from "react";
import { useDispatch } from 'react-redux';
import './pages.css';
import { HistoryBody } from "../Components/HistoryBody";
import { clearAction } from "../Reducers/weather_reducer";
import HistoryTitle from "../Components/HistoryTitle"

const HistoryPage = () => {
    const dispatchNow = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatchNow(clearAction());
            }}>Clear History</button>
            <br />
            <HistoryTitle />            
            <HistoryBody />
        </div>
    )
}
export default HistoryPage;