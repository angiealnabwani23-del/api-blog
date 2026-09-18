import './App.css'
import Header from './Header'
import Add from './Add'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Container } from '@mui/material'
import EditPost from './EditPost'
function App() {

  return (
    <>
    <Router>
    <Header/>
<Container sx={{mt:4}}>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/edit/:id' element={<EditPost/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
     </Routes>
     </Container>
     </Router>
    </>
  )
}

export default App
