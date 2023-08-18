import React from 'react'
import orders from '../images/icons/icon1.png'
import orders1 from '../images/icons/icon2.png'
import orders2 from '../images/icons/icon3.png'
import orders3 from '../images/icons/icon4.png'
import orders4 from '../images/icons/icon5.png'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import banner from '../images/banner/b17.jpg'
import banner1 from '../images/banner/b10.jpg'
import blog1 from '../images/blog/blog-1.jpg'
import blog2 from '../images/blog/blog-2.jpg'
import blog3 from '../images/blog/blog-3.jpg'
import blog4 from '../images/blog/blog-4.jpg'
import Newsletter from '../components/Newsletter'
import Marquee from "react-fast-marquee";
import { Button } from 'react-bootstrap'






const Home = () => {
    return <>
        <div className='hero'>
            <Card className="bg-dark text-white border-0 mt-4">
                <Card.Img src="https://www.unir.net/wp-content/uploads/2020/12/Moda_8_reducida-e1644396456452.jpg" alt="Card image" />
                <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
                    <div className='containerS m-0'>
                        <Card.Title className='display-4 fw-bolder mb-0'>MODA OTOÑO</Card.Title>
                        <Card.Text className='lead fs-3'>
                            ROPA CON UN 50% DE DESCUENTO EN TODOS LOS PRODUCTOS
                        </Card.Text>
                        <Link to='/category' className='btn btn-primary' id='button-link'>Comprar ahora</Link>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
        <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="card m-auto mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={banner} className="img-fluid rounded-start mt-3" height={800} width={200} alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Hot Deals</h5>
                                        <h2 className="card-text mb-2">Compra uno y lleva otro gratis.</h2>
                                        <p className="card-text mb-2"><small className="text-body-secondary">La última mejor colección en nuestro armario <br />Siente la ternura con nuestros conjuntos</small></p>
                                        <Link to='blog'>
                                            <button className='mt-4 p-1'>Más información</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 d-flex">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={banner1} className="img-fluid rounded-start mt-4" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Moda de temporada</h5>
                                        <h2 className="card-text mb-2">Ropa para cualquier clima y situacion</h2>
                                        <p className="card-text mb-2"><small className="text-body-secondary">No importa en qué temporada sea <br />Te tenemos cubierto</small></p>
                                        <Link to='blog'>
                                            <button className='mt-4 p-1'>Más información</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>


        <section className="blo p-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="mb-3"> Que dicen nuestros clientes...</h1>
                        <p className="mb-4">Nuestros clientes nunca dejan pasar la oportunidad de brindar comentarios.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    "Variedad increíble reflejada en cada prenda. Modelos únicos para lucir a la moda en cualquier ocasión. ¡Altamente recomendado!
                                </Card.Text>
                                <Button as={Link} to="/nosotros" variant="primary">Leer mas</Button>
                            </Card.Body>
                        </Card>

                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={blog2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        ¡Vaya opciones geniales! Siempre encuentro algo que se adapta a mi estilo. ¡Mi amiga y yo adoramos explorar juntas!
                                    </Card.Text>
                                    <Button as={Link} to="/nosotros" variant="primary">Leer mas</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={blog3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Nosotras valoramos la calidad y la moda. Esta tienda nos sorprende con su selección única y versátil. ¡Siempre encontramos algo!
                                    </Card.Text>
                                    <Button as={Link} to="/nosotros" variant="primary">Leer mas</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={blog4} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Me encanta esta tienda. Siempre hallo ideas inspiradoras y prendas de calidad. Un lugar perfecto para expresar mi estilo único.
                                    </Card.Text>
                                    <Button as={Link} to="/nosotros" variant="primary">Leer mas</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>h
            </div>
        </section>

        <section className="hero p-4">
            <div className="container-xxl">
                <div className="col-12 p-3">
                    <Marquee className='p-2 slide'>
                        <div>
                            <img src={orders} alt="" className='img-fluid' />
                            <p className="card-text mb-2">Orden rapida</p>
                        </div>
                        <div>
                            <img src={orders1} alt="" className='img-fluid' />
                            <p className="card-text mb-2 mx-3">Envios</p>

                        </div>
                        <div>
                            <img src={orders2} alt="" className='img-fluid' />
                            <p className="card-text mb-2">Descuentos</p>
                        </div>
                        <div>
                            <img src={orders3} alt="" className='img-fluid' />
                            <p className="card-text mx-4">Callcenter</p>
                        </div>
                        <div>
                            <img src={orders4} alt="" className='img-fluid' />
                            <p className="card-text">Compras online</p>
                        </div>
                    </Marquee>
                </div>
            </div>



        </section>
        <Newsletter />
    </>;
}

export default Home