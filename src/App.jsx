import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import NavbarComponent from './components/NavbarComponent'
import '../src/dist/css/main.css'

function App() {


  return (
    <>
    <NavbarComponent/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/admin' element={<AdminPage/>}/>
</Routes>
</>
  )
}

export default App
