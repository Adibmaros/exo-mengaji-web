import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

import { useState , useEffect } from 'react';
import HomePage from '../pages/HomePage';
const NavbarComponent = () => {

  const [changeColor,setChangeColor] = useState(false)

  const changeBackgroundColor = () =>{
    if (window.scrollY > 10){
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  }

  useEffect(() =>{
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor)
  })


  return (
    <div className='fixed-top '>
      <Navbar bg='' expand="lg" className={changeColor ? 'color-active' : ''} >
      <Container>
        <Navbar.Brand className='fs-3 fw-bold' href="#home">Exo Mengaji</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="mx-auto text-center p-2">
            <NavLink style={{ textDecoration: 'none' }} to={HomePage} className='text-dark nav-link' >Home</NavLink>
          <button className='btn btn-success align-items-center'>Join With Us</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent
