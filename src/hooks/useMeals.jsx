import { useState, useEffect } from 'react'

export function useMeals (search) {
  const [newMeals, setNewMeals] = useState()
  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(data => setNewMeals(data.meals))
  }, [search])
  return ({ newMeals })
}
