import React from 'react'
import { Nav,Container,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
        <Navbar sticky='top' className='bg-emerald-500'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Simple Client
                </Navbar.Brand>
                <Nav className='flex-grow-1 justify-content-end'>
                    <Nav.Link as={NavLink} to={"/add"}>
                        Add User
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar
