import '../App/App.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/movies' element={<MoviesPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
