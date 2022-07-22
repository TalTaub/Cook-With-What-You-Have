import React from 'react';
import "../App.css";


function Recipe(props){
        console.log(props.img);
        return (
            <div className="recipeDiv">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <p>{props.descreption}</p>
            </div>
        )
    }
    
 

export default Recipe;