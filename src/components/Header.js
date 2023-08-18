import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { GoMail } from 'react-icons/go'
import { BiPhoneCall } from 'react-icons/bi'
import CartWidget from './CartWidget'
import { VscAccount } from 'react-icons/vsc'
import { useAuth } from '../context/auto/AuthContext'
import { IoLogInOutline } from 'react-icons/io5'



const Header = () => {

    const { logout } = useAuth()



    return (
        <>
            <header className='header-top-strip shadow-sm head'>
                <div className="container-xxls">
                    <div className='row alin-item-center ropa'>
                        <div className="col-6">
                            <small>Ropa de temporada a un 60% de descuento</small>
                        </div>
                        <div className="fono col-6 d-flex justify-content-between">
                            <div>
                                <a href="'Tel: +569 2332333'"> LLamenos al +569 23332333</a>
                            </div>
                            <div>
                                <Link><GoMail className='fs-5 mx-4' /></Link>
                                <Link><BiPhoneCall className='fs-5 mx-4' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navbar expand="lg" className="bg-white py-3 shadow-sm">
                <Container className='p-4'>
                    <Link to="/" className="navbar-brand fw-bold fs-4">
                        TheClothingCove
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0 fs-6" style={{ maxHeight: '100px' }} navbarScroll>

                            <Link to="/" className="nav-link">INICIO</Link>
                            <Link to="/category" className="nav-link">PRODUCTOS</Link>
                            <Link to="/Nosotros" className="nav-link">NOSOTROS</Link>
                            <Link to="/contacto" className="nav-link">CONTACTO</Link>

                        </Nav>



                        <Button variant="outline-dark" as={Link} to="/login">
                            <VscAccount size="1.6em" />
                        </Button>





                        <Button variant="outline-dark ms-2" onClick={() => logout()}><IoLogInOutline size="1.6em" />Cerrar sesion</Button>




                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default Header