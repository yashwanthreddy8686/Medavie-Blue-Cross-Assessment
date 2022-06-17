import React from 'react'
import Recipe from './Recipe'

const RecipesList = ({ currentItems }) => {
    return (
        <ul>
            {currentItems && currentItems.map(item => <Recipe key={item.id} id={item.id} title={item.title} image={item.image} />)}
        </ul>
    )
}

export default RecipesList