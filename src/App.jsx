import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NavbarComponent from './components/NavbarComponent'
import AdminPage from './pages/AdminPage'
import './styles/css/main.css'

function App() {


  return (
    <>
    <NavbarComponent/>
<Routes>
  <Route path='/' element={<LoginPage/>}/>
  <Route path='/admin' element={<AdminPage/>}/>
  <Route path='/home' element={<HomePage/>}/>

</Routes>
</>
  )
}

export default App
