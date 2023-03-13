import { useState, useEffect } from 'react'
import { useMeals } from '../hooks/useMeals'
import { Text, Input, Spacer, Container, Card, Row, Grid } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export function Search () {
  const [meals, setMeals] = useState()
  const [search, setSearch] = useState('')
  const { newMeals } = useMeals(search)
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }
  useEffect(() => {
    setMeals(newMeals)
  }, [search])
  return (
    <>
      <Container justify='center' align='center'>
        <Spacer />
        <Input bordered type='text' placeholder='Search your meal' name={search} value={search} onChange={handleChange} aria-label='search bar' />
        <Spacer />
      </Container>
      <Grid.Container justify='center' gap={1}>
        {
        search.length > 0
          ? meals
            ? meals.map(meal => {
              return (
                <Grid xs={3} key={meal.idMeal}>
                  <Card css={{ width: '100%' }} variant='bordered'>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image width='100%' objectFit='cover' src={meal.strMealThumb} alt='meal image' />
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer css={{ justifyItems: 'flex-start' }}>
                      <Row wrap='wrap' justify='space-between' align='center'>
                        <Text b css={{ maxWidth: '50%' }}>{meal.strMeal}</Text>
                        <Link to={`/${meal.idMeal}`}>Recipe</Link>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              )
            }
            )
            : <Text h3>No hay resultados</Text>
          : <Text h3>Realiza una búsqueda</Text>
          }
      </Grid.Container>
    </>
  )
}

export default Search
