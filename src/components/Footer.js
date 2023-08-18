import React from 'react'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import playstore from '../images/pay/play.jpg'
import appstore from '../images/pay/app.jpg'
import visa from '../images/pay/pay.png'

const footer = () => {
  return <>
    
    <footer className='footer p-5 shadow-sm'>
      <div className="container-xxl ">
       <hr />
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
            <h5 className='footer-title mb-3'><b>Contacto</b></h5>
            <div className='mb-1'><p><b>Direccion:</b>  Calle falsa #123, Sprinfield</p> </div>
            <div className='mb-1'><p><b>Telefono:</b>  <a className='footer-tel' href="tel:+569 23332333"> (+56) 9354-6789</a></p> </div>
            <div className='mb-1'><p><b>Atencion:</b>  08:00 a 19:00 Hrs</p> </div>
            <div className='mb-1'><p><b>Siguenos en nuestras redes sociales</b></p> </div>
            <div className="socials d-flex gap-3">
              <Link to='https://discord.com/channels/1027937184768081950/1027937184768081952' id='footer-link' target='_blank' className='gap-3'>
                <BsDiscord />
              </Link>
              <Link to='https://twitter.com/eclarkhalid' id='footer-link' target='_blank' className='gap-3'>
                <BsTwitter />
              </Link>
              <Link className='gap-3' id='footer-link'>
                <BsFacebook />
              </Link>
              <Link to='https://app.slack.com/client/T0195LMKD1R/D04QEBN1J80/rimeto_profile/U04PQHERFM1?cdn_fallback=2' id='footer-link' target='_blank' className='gap-3'>
                <BsSlack />
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
            <h5 className='footer-title mb-3'><b>Acerca</b></h5>
            <div className='mb-1'> <Link to='/about' id='footer-links'>Sobre Nosotros</Link>  </div>
            <div className='mb-1'> <Link to='checkout' id='footer-links'>Entrega & Envio</Link>  </div>
            <div className='mb-1'> <Link id='footer-links'>Politica de Privacidad</Link>  </div>
            <div className='mb-1'> <Link id='footer-links'>Terminos y Condiciones</Link>  </div>
            <div className='mb-1'> <Link id='footer-links'>Tarifas</Link>  </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
            <h5 className='footer-title mb-3'><b>Cuenta</b></h5>
            <div className='mb-1'> <Link to='/login' id='footer-links'>Perfil</Link>  </div>
            <div className='mb-1'> <Link to='/cart' id='footer-links'>Ver Carrito</Link>  </div>
            <div className='mb-1'> <Link to='/contact' id='footer-links'>Ayuda</Link>  </div>
            <div className='mb-1'> <Link id='footer-links'>Pagos</Link>  </div>
            <div className='mb-1'> <Link id='footer-links'>My Wishlist</Link>  </div>
            <div className='mb-1'> <Link id='footer-links'>Cupones</Link> </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <h5 className='footer-title mb-4'><b>Instala Nuestra App</b></h5>
            <p className='mb-3'>Disponible en Google Play & App Store</p>
            <div className="className='mb-3 col-md-6 col-12 pay">
              <div className='mb-3'>
                <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
                  <img src={playstore} alt="" />
                </Link>
              </div>
              <div className='mb-3'>
                <Link to='https://www.apple.com/app-store/' target='_blank'>
                  <img src={appstore} alt="" />
                </Link>
              </div>
            </div>
            <p className="mb-3">
              Metodos de pago
            </p>
            <div className="pay">
              <Link to='https://www.paypal.com/signin' target='_blank'>
                <img src={visa} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <hr className='my-4' />
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="text-center text-md-start">&copy;Derechos Reservados alexiscript 2023</p>
          </div>
          <div className="col-12 col-md-6">
            <ul className="list-inline text-center text-md-end">
              <li className="list-inline-item"><Link to="#" className="text-dark">Politica de Privacidad</Link></li>
              <li className="list-inline-item"><Link to="#" className="text-dark">Terminos de Uso</Link></li>
              <li className="list-inline-item"><Link to="#" className="text-dark">Contactanos</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>;
}

export default footer