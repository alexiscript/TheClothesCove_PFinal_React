import React, { useState, useContext, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
    const {  agregarAlCarrito } = useContext(CartContext);
    

    const [isLoading, setIsLoading] = useState(true); 
    const [cantidad, setCantidad] = useState(1);

    const handelRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handelSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    useEffect(() => {
        
        setTimeout(() => {
            setIsLoading(false); 
        }, 1000);
    }, []);

    return (
        <div className='container d-flex m-4 mt-5 mb-5'>
            {isLoading ? (
                
                <>
                    <div className="col-md-6 m-3">
                        <Skeleton height={400} />
                    </div>
                    <div className="col-md-6">
                        <Skeleton height={50} width={300} />
                        <Skeleton height={75} />
                        <Skeleton height={50} width={150} />
                        <Skeleton height={50} />
                        <Skeleton height={150} />
                        <Skeleton height={50} width={100} />
                        <Skeleton height={50} width={100} />
                    </div>
                </>
            ) : (
                
                <>
                    <div className='col-md-6' key={item.id}>
                        <img className='shadow-sm p-5 mx-5' src={item.imagen} alt={item.titulo} height={400} width={400} />
                    </div>
                    <div className='col-md-6'>
                        <h4 className='text-uppercase text-black-50'>{item.marca}</h4>
                        <hr />
                        <h1 className='display-6'>{item.titulo}</h1>
                        <p className='lead fw-bolder'>
                            {item.rating && item.rating.rate}
                            <i className='fa fa-star text-warning'></i>
                        </p>
                        <h3 className='display-6 fw-bold my-4'>
                            $ {item.precio}
                        </h3>
                        <p className="lead">
                            {item.descripcion}
                        </p>
                        <ItemCount
                            cantidad={cantidad}
                            handelSumar={handelSumar}
                            handelRestar={handelRestar}
                            handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                    </div>
                </>
            )}
        </div>
    );
}

export default ItemDetail;

