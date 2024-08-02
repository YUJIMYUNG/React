import { NavLink } from "react-router-dom"
import "./header.css"

export default function Header(){
    return(
       <header className="header-container">
            <div className="header-box">
                <NavLink exact to={"/"} className="main-logo">로고</NavLink>
                <NavLink exact to={"/cart"} className="icon">장바구니</NavLink>
                
            </div>
       </header>
    )
}