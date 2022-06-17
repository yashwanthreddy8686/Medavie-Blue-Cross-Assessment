import React from 'react'
import Recipe from './Recipe'
import './RecipesList.css'

const RecipesList = ({ currentItems }) => {
    return (
        <ul className='recipe__list'>
            {currentItems && currentItems.map(item => <Recipe key={item.id} id={item.id} title={item.title} image={item.image} />)}
        </ul>
    )
}

export default RecipesList