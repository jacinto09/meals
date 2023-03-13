import Search from './components/Search'
import Meal from './components/Meal'
import { Navbar, Text } from '@nextui-org/react'
import './App.css'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar isBordered variant='sticky'>
          <Link to='/'>
            <Text h4>Meal Finder </Text>
          </Link>
          <Text h4>
            Jacinto Martinez
          </Text>
        </Navbar>
        <Routes>
          <Route exact path='/' element={<Search />} />
          <Route path='/:id' element={<Meal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
