import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext)
    
  return (
    <Link to="/carrito" className='position-relative'>
          <Button variant="outline-dark ms-2 p-2" >
              <i className="bi bi-cart4"><AiOutlineShoppingCart size="1.4em"/></i>
              <span className='badge badge-danger position-absolute top-0 start-100 translate-middle bg-danger text-white'>
                {cantidadEnCarrito()}
            </span>
          </Button>
    </Link>
  )
}

export default CartWidget