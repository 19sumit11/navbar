import React from "react";
import "./Navbar.css"

const Navbar = () => {

return (
    <div>
       <div className="navbar">
        <div className="div-img d2">
            <img className="image" src="https://layerly.io/wp-content/uploads/2022/04/Layerly-Logo-03.svg" alt="" />
        </div>
        <div  className="List d2">
            <ul >
                <li>Pricing</li>
                <li>Add-ons</li>
                <li>FAQs</li>
                <li>Company</li>
            </ul>
        </div>
        <div className="div-btn d2">
            <button className="btn">Start Here</button>
        </div>
       </div>
    </div>
)}

export default Navbar