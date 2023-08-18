import React from 'react'
import { Link } from 'react-router-dom'




const ItemCount = ({ cantidad, handelRestar, handelSumar, handleAgregar }) => {



  return (
    <div className='container6  m-0'>
      <div className='d-flex mb-4'>
        <button className='btn btn-outline-dark px-3 py-1' onClick={handelRestar}>-</button>
        <p className='px-3 mt-3'>{cantidad}</p>
        <button className='btn btn-outline-dark px-3 py-1' onClick={handelSumar}>+</button>
      </div>


      <div className='d-flex justify-content-start'>
        <button className='btn btn-outline-dark px-4 py-2' onClick={handleAgregar}>Agregar al carrito</button>
        <Link to="/carrito" className='btn btn-dark ms-2 px-3'>Ir al carrito</Link>
      </div>


    </div>
  )
}

export default ItemCount