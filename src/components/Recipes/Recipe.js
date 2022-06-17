import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Recipe.css'

const Recipe = ({ id, title, image }) => {
    const navigate = useNavigate();
    return (
        <div className='recipeList__card' onClick={(e) => navigate(`recipe-detail/${id}`)}>
            <li id={id} className='recipeList__item'>
                <div className='recipeList__card-imgCon'>
                    <img src={image} alt='Recipe' className='recipeList__card-image' />
                </div>
                <h3 className='recipeList__card-title'>{title}</h3>
            </li>
        </div>
    )
}

export default Recipe