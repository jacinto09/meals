import { useState, useEffect } from 'react'
import { useMeals } from './hooks/useMeals'
import { Navbar, Text, Input, Spacer, Container, Card, Button, Row, Grid, Loading } from '@nextui-org/react'
import './App.css'

function App () {
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
      <Navbar>
        <Text h4>
          Meal Finder
        </Text>
        <Text h4>
          Jacinto Martinez
        </Text>
      </Navbar>
      <Container grid justify='center' align='center'>
        <Spacer />
        <Input bordered type='text' placeholder='Search your meal' name={search} value={search} onChange={handleChange} />
        <Spacer />
      </Container>
      <Grid.Container justify='center' css={{ p: 20 }} gap={1}>
        {
        search.length > 0
          ? meals
            ? meals.map(meal => {
              return (
                <Grid xs={3} key={meal.idMeal}>
                  <Card isPressable css={{ width: '100%' }} variant='bordered'>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image width='100%' height={140} objectFit='cover' src={meal.strMealThumb} alt='meal image' />
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer css={{ justifyItems: 'flex-start' }}>
                      <Row wrap='wrap' justify='space-between' align='center'>
                        <Text b css={{ maxWidth: '50%' }}>{meal.strMeal}</Text>
                        <Button size='sm'>Recipe</Button>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              )
            }
            )
            : <p>no hay na</p>
          : <p>no hay na</p>
          }
      </Grid.Container>
    </>
  )
}

export default App
