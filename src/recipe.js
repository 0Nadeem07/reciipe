import React from 'react';

const Recipe = ({title,calories,image,cuisineType,ingredients}) => {
    return (

        <div className='card-container'>
            <div className='card'>
                <figure className='front'>
                <h1>{title}</h1>            
                <img src={image} alt="loading.." className='img' /><br></br>
                <h5>Cuisine: {cuisineType}</h5><br></br>
                <p><b>Calories:</b> {calories}</p><br></br>
                </figure>

                <figure className='back'>
                    <h3>Ingredients</h3>
                <ol>
                    {ingredients.map(ingredient =>(
                        <li>{ingredient.text}</li>          
                    ))}
                </ol>
                </figure>
            </div>
        </div>

    );
};

export default Recipe;