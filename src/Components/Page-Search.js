import { Search } from "./Search.jsx";
import { Result } from "./Result.jsx";
import { HistoryBody } from "./HistoryBody.jsx"; 

export const PageSearch = () => {    
    return(
        <div>
            <Search/><Result/><HistoryBody/>
        </div>);
}