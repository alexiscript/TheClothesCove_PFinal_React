import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './item.css'





const Item = ({ producto }) => {
    return (
        <div className='col-md-3 mb-4' key={producto.id}>
            <Card className='h-100 text-center p-4'>
                <Card.Img variant='top' src={producto.imagen} alt={producto.titulo} height='250px' />
                <Card.Body>
                    <Card.Title className='mb-3'>{producto.titulo}</Card.Title>
                    <Card.Text className='lead fw-bold'>
                        ${producto.precio}
                    </Card.Text>
                    <Card.Text className='lead'>
                        {producto.marca}
                    </Card.Text>
                    <Button as={Link} to={`/item/${producto.id}`} className='comprar type1'>Comprar</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Item