import React from "react";
import "./Navbar.css"

const Navbar = () => {

return (
    <div>
       <div className="navbar">
        <div className="div-img">
            <img className="image" src="https://layerly.io/wp-content/uploads/2022/04/Layerly-Logo-03.svg" alt="" />
        </div>
        <div  className="List">
            <ul >
                <li>Pricing</li>
                <li>Add-ons</li>
                <li>FAQS</li>
            </ul>
        </div>
        <div className="div-btn">
            <button className="btn">Start Here</button>
        </div>
       </div>
    </div>
)}

export default Navbar