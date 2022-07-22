import React from 'react';
import logo from '../images/logo.png';
import header from '../Components/header.css';


function Header(){
        
    return (<div className="headerDiv">
        <img className="logo" src={logo}/>
        <h1>the best you can afford</h1>
        <hr/>
        </div>
    );
}


export default Header;