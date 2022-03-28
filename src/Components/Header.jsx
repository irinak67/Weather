import { Link } from "react-router-dom"

export const Header =()=>{
return(
<div className="header">
    <Link className="link" to="/Home" > Home</Link>
    <Link className="link" to="/History" > History</Link>
</div>)
}   