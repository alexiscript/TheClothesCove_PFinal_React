import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito, eliminarItem } = useContext(CartContext);
    const navigate = useNavigate();

    const handleVaciar = () => {
        vaciarCarrito();
        toast.success('Carrito vaciado con exito');
    }

    const handleEliminarItem = (itemId) => {
        eliminarItem(itemId);
        toast('Producto eliminado con exito');
    }

    const handleFinalizarCompra = () => {
       
        Swal.fire({
            title: 'Finalizar Compra',
            text: 'Para finalizar la compra, inicia sesión o regístrate.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Iniciar Sesión',
            cancelButtonText: 'Registrarse',
        }).then((result) => {
            if (result.isConfirmed) {
                
                navigate("/login"); 
            } else if (result.dismiss === Swal.DismissReason.cancel) {
               
                navigate("/login"); 
            }
        });
    }
    return (
        <section className='cart'>
            <div className='container-xxl p-5'>
                {carrito.length > 0 ?
                    <div className='row'>
                        <div className='p-2 text-center'>
                            <h1>Carrito</h1>
                        </div>
                        <div className='col-12 col-md-5 text-center'>
                            <h5>Productos</h5>
                        </div>
                        <div className='col-12 col-md-5 text-center'>
                            <h5>Detalles</h5>
                        </div>
                        <div className='p-3'>
                            {carrito.map((prod) => (
                                <div key={prod.id} className="container card my-3">
                                    <div className="row g-3">
                                        <div className="col-12 col-md-5">
                                            <div className="p-3">
                                                <div className="cart-item-image m-auto">
                                                    <img src={prod.imagen} className="card-img-top img-fluid my-5" alt={prod.titulo} style={{ maxWidth: '100%', maxHeight: '600px' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-7">
                                            <div className="p-3">
                                                <h2>{prod.titulo}</h2>
                                                <p className="cart-item-id">Marca: <b className='text-center mb-1'>{prod.marca}</b></p>
                                                <p className="cart-item-id">Precio: <b className='text-center mb-1'>$ {prod.precio}</b></p>
                                                <p className="cart-item-id">Cantidad: <b className='text-danger'>{prod.cantidad}</b></p>
                                                <p className="cart-item-id">Stock: <b className='text-danger'>{prod.stock}</b></p>
                                                <p className="cart-item-id">Codigo producto: <b className='text-center mb-3'>{prod.id}</b></p>
                                            </div>
                                            <div className="p-3 d-flex justify-content-between align-items-end">
                                                <div>
                                                    <p className="cart-item-id">Total: <b className='text-danger'>{prod.precio * prod.cantidad}</b></p>
                                                </div>
                                                <button className="btn btn-outline-danger" onClick={() => handleEliminarItem(prod.id)}>
                                                    <RiDeleteBack2Line />
                                                </button>
                                            </div>
                                            <div className="p-3">
                                                <input type="text" className="form-control" id="coupon" placeholder="Enter coupon code..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='col-12 p-2 text-end'>
                                <button className='btn btn-outline-danger' onClick={handleVaciar}>Vaciar carrito</button>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-12 col-md-6 d-flex m-auto justify-content-center mt-4'>
                                    <button onClick={() => navigate("/category")}>Volver a tienda</button>
                                </div>
                                <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                                    <div className="col-12">
                                        <div className="text-end">
                                            <h2 className="mb-3">
                                                <b>Total</b>
                                            </h2>
                                            <div className="align-items-center">
                                                <div>
                                                    <p className="total-price align-items-center">
                                                        <b>${precioTotal()}</b>
                                                    </p>
                                                </div>
                                            </div>
                                            <button onClick={handleFinalizarCompra} className="mt-5">Finalizar Compra</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-xxl">
                       <div className="row">
                           <div className="text-center p-5 mb-4">
                             <h2>Tu carrito esta vacio</h2>
                           </div>
                        </div>
                     </div>
                }
            </div>
        </section>

    );
}

export default Carrito;
