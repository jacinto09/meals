import { useState, useEffect } from 'react'

export function useMealsById (idMeal) {
  const [newMealsById, setNewMealsById] = useState()
  const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(data => setNewMealsById(data.meals))
  }, [idMeal])
  return ({ newMealsById })
}
