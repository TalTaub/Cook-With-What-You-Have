import React from 'react';
import Recipe from "./Recipe";
import "../App.css";



class ResultArea extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            recipeList:props.recipeList,
            results:props.results,
        }
    } 

    

    render(){
    
        return (
            <div className="ResultArea">
                {this.props.results.map((x)=>{
            if (this.props.results.length>0){
            return <Recipe img={x.img} name={x.name} descreption={x.descreption}/>
            }
        })}
            </div>
        )
    }
}

export default ResultArea;