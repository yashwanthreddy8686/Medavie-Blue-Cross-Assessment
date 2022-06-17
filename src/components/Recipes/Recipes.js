import React from 'react'
import PaginateRecipes from './PaginateRecipes';
import './Recipes.css'

const Recipes = ({ recipes, data }) => {
    return (
        <main className='recipes'>
            <div className='recipes__container'>
                <form className='recipes__form'>
                    <div className='recipes__searchBar'>
                        <input type='text' className='recipes_input' placeholder='search recipes' />
                        <button className='button'>Search</button>
                    </div>
                    <div className='recipes__filterControl'>
                        <label>Filter By Cuisine</label>
                        <select>
                            <option>Indian</option>
                        </select>
                    </div>
                </form>
                <PaginateRecipes itemsPerPage={5} items={recipes} {...data} />
            </div>
        </main>
    )
}

export default Recipes