import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Parse from 'html-react-parser'

const RecipeDetail = () => {
    const [recipeDetail, setRecipeDetail] = useState(null)
    const { recipeId } = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetchRecipeDetails();
    }, [recipeId])

    const fetchRecipeDetails = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`, { headers: { 'Content-Type': 'application/json' } });
        const data = await response.json();
        setRecipeDetail(data);
    }

    return (
        <div className='recipeDetails'>
            <section className='recipe__header'>
                <h3 className='recipe__name'> {recipeDetail?.title}</h3>
                <img className='recipe__image' src={recipeDetail?.image} alt='recipe'></img>
            </section>
            <section className='recipe__healthInfo'>
                <h3>Health Information</h3>
                <div className='recipe__healthInfo-details'>
                    {recipeDetail?.vegan ? <p>It is Vegan</p> : <p>It is not a Vegan</p>}
                    {recipeDetail?.dairyFree ? <p>It is dairyFree</p> : <p>It is not dairyFree</p>}
                </div>
            </section>
            <section className='recipe__ingredients'>
                <h3 className='recipe__ingredients-title'>List of Ingredients</h3>
                <ul className='recipe__ingredients-list'>
                    {recipeDetail?.extendedIngredients.map(ingredient => {
                        return <li key={ingredient.id}><p>{ingredient.name}<br></br>{ingredient.original}</p></li>
                    })}
                </ul>
            </section>
            <section className='recipe__instructions'>
                <h3>Cooking Instructions</h3>
                {recipeDetail?.instructions}
            </section>
        </div>
    )
}

export default RecipeDetail