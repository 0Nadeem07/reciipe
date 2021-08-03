import React , {useEffect,useState}from "react";
import Recipe from  './recipe';
import './App.css';

function App() {

  const APP_ID ='2fbfa884';
  const APP_KEY="a73e98871637710016698ceb0b29f793";

  const [recipes , setRecipes] = useState([]);
  const [search ,setSearch] = useState('');
  const [query , setQuery] = useState('chicken')
  
//DATA STORING AND PROCESSING
  useEffect(() =>{
    get_recipes();

  },[query]);

  //FETCHING DATA

  const get_recipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    
  }

  //SEARCHING FUNCTION

  const updateSearch = e =>{
    setSearch(e.target.value);
    
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <h1 className='title'>The Recipe App</h1>
      <form className="search_form">
        <input type="text" className="search_bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search_btn " onClick={ getSearch}>SEARCH</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories }
        image={recipe.recipe.image}         
        cuisineType={recipe.recipe.cuisineType}
        ingredients={recipe.recipe.ingredients}/>
      ))};
      </div>
     
    </div>
  );
}

export default App;
