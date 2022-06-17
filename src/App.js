import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [httpError, setHttpError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=5`);

      if (!response.ok) {
        throw new Error('Request Failed');
      }
      const data = await response.json();
      setData(data);
      setRecipes(data.results);
      console.log(recipes);
    }
    fetchRecipes().catch((error) => {
      setHttpError(error.message);
    })
  }, [])

  if (httpError) {
    return (
      <p>{httpError}</p>
    )
  }

  return (
    <>
      <header className='app__header'>Recipes</header>
      <Recipes recipes={recipes} data={data} />
    </>
  );
}

export default App;
