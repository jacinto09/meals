import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [meals, setMeals] = useState()
  const [search, setSearch] = useState('')
  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(data => { setMeals(data.meals) })
    console.log(meals)
  }, [search])
  return (
    <>
      <head className='nav'>
        <h4>Meal finder</h4>
        <h4>Jacinto Martinez</h4>
      </head>
      <main className='mainApp'>
        <input className='input' type='text' placeholder='Meal or ingredient' name={search} value={search} onChange={handleChange} />
        {
        search.length > 0
          ? meals
            ? meals.map(meal => {
              return (
                <div key={meal.idMeal} className='mealDiv'>
                  <h3>{meal.strMeal}</h3>
                  <img src={meal.strMealThumb} alt='meal image' />
                  <button>Recipe</button>
                </div>
              )
            }
            )
            : <p>no hay na</p>
          : <p>no hay na</p>
          }
      </main>
    </>
  )
}

export default App
