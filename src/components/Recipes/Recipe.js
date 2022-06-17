import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recipe = ({ id, title, image }) => {
    const navigate = useNavigate();
    return (
        <div onClick={(e) => navigate(`recipe-detail/${id}`)}>
            <li id={id}>
                <div>
                    <img src={image} alt='Recipe' />
                    <h3>{title}</h3>
                </div>
            </li>
        </div>
    )
}

export default Recipe