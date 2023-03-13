import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Card } from '@nextui-org/react'
import { useMealsById } from './../hooks/useMealById'
export function Meal () {
  const { idMeal } = useParams()
  const [newMealId, setNewMealId] = useState()
  const { newMealsById } = useMealsById(idMeal)
  useEffect(() => {
    setNewMealId(newMealsById)
    console.log('useEffect')
    console.log(newMealsById)
  }, [])

  return (
    newMealId
      ? newMealId.map(meal => {
        return (
          <Grid key={meal.idMeal}>
            <Card>
              <Card.Header>
                {meal.strMeal}
              </Card.Header>
              <Card.Image src={meal.strMealThumb} />
              <Card.Footer>
                {meal.strInstructions}
              </Card.Footer>
            </Card>
          </Grid>
        )
      })
      : 'No tenemos Informacion'
  )
}
