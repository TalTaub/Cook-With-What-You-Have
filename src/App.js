import './App.css';
import React from 'react';
import Header from '../src/Components/Header';
import InteractiveArea from '../src/Components/InteractiveArea';
import ResultArea from '../src/Components/ResultArea';



const recipeList = [
  {id: 0, img: "https://cdn.pixabay.com/photo/2019/03/10/13/32/food-4046229_1280.jpg", name: "eggs", descreption: "heart worming dish for the lonly studential mornnings", ingredientList: ["eggs","oil","salt","pepper"]},
  {id: 1, img: "https://cdn.pixabay.com/photo/2016/03/17/05/03/pasta-1262327_1280.jpg", name: "pasata alfreddo", descreption: "chreamy & dreamy the pasta dish that will change your life!", ingredientList: ["flour","salt","eggs","cream","cheese","pepper","mashrooms"]},
  {id: 2, img: "https://cdn.pixabay.com/photo/2016/11/21/15/52/appetizer-1846083_1280.jpg", name: "french fries", descreption: "crispy nuggets from heaven, as salty as a LOL player's soul!", ingredientList: ["potato","salt","pepper","oil","green onion"]},
  {id: 3, img: "https://cdn.pixabay.com/photo/2015/03/26/09/39/fried-chicken-690039_1280.jpg", name: "hot chicken wings", descreption: "trust us, it will be spicy, both ways...", ingredientList: ["chicken wings","salt","pepper","hot souce","garlic","bread crumbs"]},
  {id: 4, img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg", name: "dish name", descreption: "dish descrepsh", ingredientList: ["oil","potato","rice","meat","water"]},
  {id: 5, img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg", name: "dish name", descreption: "dish descrepsh", ingredientList: ["onion","meat","hot souce","salt","tomato"]},
  {id: 6, img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg", name: "dish name", descreption: "dish descrepsh", ingredientList: ["tomato","bayleaf","coriander","bacon"]},
  {id: 7, img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg", name: "dish name", descreption: "dish descrepsh", ingredientList: ["salt","lemmon","salmon","eggs","flour"]},
  {id: 8, img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg", name: "dish name", descreption: "dish descrepsh", ingredientList: ["frogs","chicken heart","cow toung","milk"]},
  {id: 9, img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg", name: "dish name", descreption: "dish descrepsh", ingredientList: ["milk","eggs","salt","flour","lemon"]},
  {id: 10, img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg", name: "dish name", descreption: "dish descrepsh", ingredientList: ["salt","potato","milk","cream"]}
]

function filteringredients(recipies){
  let temparray=[];
  recipies.map((x)=>{
    x.ingredientList.map((y)=>temparray.push(y))
  }) 
  let tempSet = new Set(temparray);
  temparray = Array.from(tempSet);
  return temparray;
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipeList: recipeList,
      ingredients: [],
      foundIngredients:[],
      checkedArr:[],
      results:[]
    }
  }
  

  updatefoundIngredients = (props,key) => {
    
    // this area updates the results.
    let tempStateCheckArr = this.state.checkedArr;
    let indexOfName = this.state.checkedArr.indexOf(props.target.name);

    // updating the state-array of checked items
    if (!tempStateCheckArr.includes(props.target.name)){
    tempStateCheckArr.push(props.target.name);
    }
    else{
     tempStateCheckArr.splice(indexOfName,1);
    }
    this.setState({checkedArr:tempStateCheckArr});

    
    //let tempcheckset = new Set(tempStateCheckArr)
    //tempStateCheckArr=Array.from(tempcheckset);
   



      let tempset = new Set(
        this.state.recipeList.filter((x=>{
          for (let q=0; q<this.state.checkedArr.length;q++){
          if (!x.ingredientList.includes(this.state.checkedArr[q])){
            return false;
        }
      }
      if (this.state.checkedArr.length<=0){return false}else{ return true;}
    }))
      )
      tempset= Array.from(tempset);
      this.setState({results:tempset});
      
      


      let temparray=this.state.foundIngredients;
      if (props.target.checked) {
        temparray.push(props.target.name) 
          this.setState({foundIngredients:temparray}); 
      }
      else{
        this.setState({foundIngredients:
        temparray.filter((x)=>{
          if (x==props.target.name) {
              return false;   
          }
              return true; 
      })
      })
    }  

}



  render() {
    return (
    <div className="App">
      <Header />
      <InteractiveArea updateChecked={this.updateChecked} updatefoundIngredients={this.updatefoundIngredients} recipeList={this.state.recipeList} ingredients={filteringredients(this.state.recipeList)} checkedArr={this.state.checkedArr} />
      <ResultArea results={this.state.results} recipeList={this.state.recipeList}/>
    </div>
  );
  }
}

export default App;
