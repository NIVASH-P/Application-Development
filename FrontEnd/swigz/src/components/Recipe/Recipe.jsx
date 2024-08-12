import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { assets } from '../../Assests/assets';
import './Recipe.css';

export const Recipe = ({ category ,itemImage}) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const categoryName = category.split(' ').pop();
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`);
        setRecipe(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (category) {
      fetchRecipe();
    }
  }, [category]);

 return (
    <div className='recipe-container'>
      {recipe ? (
        <div >
              <h1 className='header-recipe'>Recipe</h1>
            <div className='recipe-box'>
           <div className='recipe-img'>
              <img src={itemImage} alt="" />
              </div>
              <div className='recipe-name'>
                <h1>{recipe.meals[0].strMeal}</h1>
                <hr className='hrdiv' />
                <p><h4>CATEGOTY : </h4>{recipe.meals[0].strTags}</p>
                <p><h4>Source:</h4>{recipe.meals[0].strSource}</p>
                <h4 className='title'>Ingredients : </h4>
           <ul className='ingredients'>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredient = recipe.meals[0][`strIngredient${i}`];
                return ingredient ? (
                    <li key={i}>
                      <span className='num'>{i}</span>
                  {ingredient}
                </li>
              ) : null;
            })}
            </ul>
              </div>
              </div>
            <h3 className='title'>Ingredients and Measure:</h3>
          <ul className='recipe-measure'>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredient = recipe.meals[0][`strIngredient${i}`];
                const measure = recipe.meals[0][`strMeasure${i}`];
                return ingredient && measure ? (
                    <li key={i}>
                      <span>🪠</span>
                  {ingredient}: {measure}
                </li>
              ) : null;
            })}
          </ul>
             <h3 className='title'>Instructions:</h3>

            <p className='instruction'>{recipe.meals[0].strInstructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};