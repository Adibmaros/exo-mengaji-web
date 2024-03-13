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
        <Navbar.Brand style={{fontFamily : 'helvetica'}} className='fs-3 fw-bold ' href="#home">
          <img className='px-2 rounded-1' width={50} src="logoexo.jpeg" alt="" />Exo Mengaji</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="mx-auto p-2 ">
            <NavLink style={{ textDecoration: 'none', fontFamily :'mono' }} to={HomePage} className='text-dark nav-link fw-bold' >Instagram</NavLink>
            <NavLink style={{ textDecoration: 'none', fontFamily :'mono' }} to={HomePage} className='text-dark nav-link fw-bold' >SOP Komunitas</NavLink>
            <NavLink style={{ textDecoration: 'none', fontFamily :'mono' }} to={HomePage} className='text-dark nav-link fw-bold' >Tentang komunitas</NavLink>
           
          <button className='btn btn-success align-items-center mx-2 mt-3'>Join With Us</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent
