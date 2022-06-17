import React from 'react'

const Recipe = ({ id, title, image }) => {
    return (
        <li id={id}>
            <div>
                <img src={image} alt='Recipe' />
                <h3>{title}</h3>
            </div>
        </li>
    )
}

export default Recipe