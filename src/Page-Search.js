import { useEffect, useState } from "react";
import { Search } from "./Search.jsx";
import { Result } from "./Result.jsx";
// import { History } from "./History.jsx"; 

export const PageSearch = () => {
    
    return(
    <div><Search/><Result/>
    {/* <History/> */}
    </div>);
}