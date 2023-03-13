import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Image, Text, Row, Spacer, Link } from '@nextui-org/react'
export function Meal () {
  const { id } = useParams()
  const [newMealId, setNewMealId] = useState()
  useEffect(() => {
    const mealsById = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      setNewMealId(data.meals)
    }
    mealsById()
  }, [id])

  return (
    newMealId
      ? newMealId.map(meal => {
        return (
          <Container key={meal.idMeal} justify='center' alignContent='center' h>
            <Row justify='center'>
              <Text h2>{meal.strMeal}</Text>
            </Row>
            <Image src={meal.strMealThumb} width={350} />
            <Row align='center' justify='center'>
              <Text h2>Ingredients</Text>
            </Row>
            <Row wrap='wrap' justify='space-around' align='center'>
              <Text>{meal.strIngredient1}</Text>
              <Text>{meal.strIngredient2}</Text>
              <Text>{meal.strIngredient3}</Text>
              <Text>{meal.strIngredient4}</Text>
              <Text>{meal.strIngredient5}</Text>
              <Text>{meal.strIngredient6}</Text>
              <Text>{meal.strIngredient7}</Text>
              <Text>{meal.strIngredient8}</Text>
              <Text>{meal.strIngredient9}</Text>
              <Text>{meal.strIngredient10}</Text>
              <Text>{meal.strIngredient11}</Text>
              <Text>{meal.strIngredient12}</Text>
              <Text>{meal.strIngredient13}</Text>
              <Text>{meal.strIngredient14}</Text>
              <Text>{meal.strIngredient15}</Text>
              <Text>{meal.strIngredient16}</Text>
              <Text>{meal.strIngredient17}</Text>
              <Text>{meal.strIngredient18}</Text>
              <Text>{meal.strIngredient19}</Text>
              <Text>{meal.strIngredient20}</Text>
            </Row>
            <Spacer />
            <Row align='center' justify='center'>
              <Text h2>
                Recipe (
                <Link href={meal.strYoutube} color='error' block target='_blank' rel='noreferrer'>
                  Youtube video
                </Link>)
              </Text>
            </Row>
            <Row>
              <Text>{meal.strInstructions}</Text>
            </Row>
            <Spacer />
          </Container>
        )
      })
      : 'No tenemos Informacion'
  )
}
export default Meal
