import React from 'react';
import '../Components/interactiveArea.css';
import Recipe from "../Components/Recipe";
import ResultArea from "./ResultArea";
import "../App.css";





class InteractiveArea extends React.Component{
    // props.updatefoundIngredients - function that updates the "original" parent list of results
    // props.checkedArr
    constructor(props){
        super(props);
        this.state={
            recipeList: props.recipeList,
            ingredients: props.ingredients,
            foundIngredients:[],
        }
    }    
    
  
    
    renderIngredient(){
        let updatefoundIngredients = this.props.updatefoundIngredients;
        return (
        <div className="ingredientArea"> 
            {this.state.foundIngredients.map((x,key)=>
                <div className="ingredientDiv">
                <h2>{x}</h2>
                <input onClick={(x)=>updatefoundIngredients(x,key)} className="ingredientFound" name={x} value={x} type="checkbox" checked={this.props.checkedArr.includes(x)}/>
                </div>
            )}
        </div>
        )
    }

    ingredientFound(thisState, searchFieldInput){
        let tempIngredientArray=[];
        for (let i in thisState.ingredients) { 
                for (let j=0; j<=searchFieldInput.target.value.length;j++){
                    if (searchFieldInput.target.value[j]==thisState.ingredients[i][j])
                    {
                        if (!tempIngredientArray.includes(thisState.ingredients[i])){
                                tempIngredientArray.push(thisState.ingredients[i]);
                        }
                    }
                       
                    }
                }
            
            this.setState({foundIngredients: tempIngredientArray.filter((x)=>{
            let count=0;
            while (count<searchFieldInput.target.value.length){
                 if (searchFieldInput.target.value[count]!=x[count]){
                    return false;
                 }
                count++;
            }
            return true;
            })})
    }

    render(){
        let thisState = this.state;
        return (
            <div className="interactiveArea">
                <button style={{width:"100px", margin:"auto"}} onClick={()=>window.location.reload()}>click to reset</button>
                <h2>ingredients you have choosed: {this.props.checkedArr.map((x)=>x+", ")}</h2>
                <input onChange={(x)=>this.ingredientFound(thisState,x)} className="searchField" name="searchField" type="text" value={this.value} placeholder="look for your ingredient" />
                {this.renderIngredient()}
                <hr className="interactiveAreaHR" />
            </div>
        )}
}

export default InteractiveArea;