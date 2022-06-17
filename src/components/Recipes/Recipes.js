import React, { useState, useEffect } from 'react'
import PaginateRecipes from './PaginateRecipes';
import './Recipes.css'

const API_KEY = process.env.REACT_APP_API_KEY;

const Recipes = () => {

    const [query, setQuery] = useState('');
    const [cuisines, setCuisines] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [cuisine, setCuisine] = useState('');

    useEffect(() => {
        const fetchCuisines = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/cuisine?apiKey=${API_KEY}`, { method: 'post', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            const data = await response.json();
            setCuisines(data.cuisines)
        }
        fetchCuisines();
    }, []);

    const fetchRecipes = async (query, cuisine) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&cuisine=${cuisine}&number=100`);
        const data = await response.json();
        return data;
    }


    const handleRecipeChange = (e) => {
        e.preventDefault();
        fetchRecipes(query, cuisine).then((data) => {
            setRecipes(data.results)
            setQuery('');
        });
    }

    const handleSearchQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleCuisineChange = (e) => {
        setCuisine(e.target.value)
    }

    return (
        <main className='recipes'>
            <div className='recipes__container'>
                <form className='recipes__form' onSubmit={handleRecipeChange}>
                    <div className='recipes__searchBar'>
                        <input type='text' value={query} className='recipes_input' placeholder='Enter a recipe' name='recipeInput' onChange={handleSearchQuery} />
                        <button className='bttn'>Search</button>
                    </div>
                    <div className='recipes__filterControl'>
                        <label className='recipes__filterControl-label'>Filter By Cuisine</label>
                        <select onChange={handleCuisineChange}>
                            {cuisines.map(cuisine => {
                                return <option value={cuisine} key={cuisine}>{cuisine}</option>
                            })}
                        </select>
                    </div>
                </form>
                <PaginateRecipes itemsPerPage={5} items={recipes} />
            </div>
        </main>
    )
}

export default Recipes