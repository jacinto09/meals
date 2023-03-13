import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Text, Row } from '@nextui-org/react'
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
          <Container key={meal.idMeal} justify='center' alignContent='center'>
            <Card css={{ height: '100vh' }}>
              <Card.Header css={{ height: '20vh' }}>
                <Row justify='center'>
                  <Text h2>{meal.strMeal}</Text>
                </Row>
              </Card.Header>
              <Card.Image src={meal.strMealThumb} css={{ height: '80vh' }} objectFit='cover' />
              <Card.Footer css={{ height: '50vh' }}>
                <Row align='center'>
                  <Text>{meal.strInstructions}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Container>
        )
      })
      : 'No tenemos Informacion'
  )
}
export default Meal
