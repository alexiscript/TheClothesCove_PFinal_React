import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/data';   
import pay from '../images/pay/pay.png'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAuth } from '../context/auto/AuthContext'






const Checkout = () => {


    const [pedidoId, setPedidoId] = useState('');
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        const pedidosRef = collection(db, 'pedidos');
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            });
    };

    if (pedidoId) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Gracias por su compra  {user.displayName} ({user.email})</h2>
                        <p>El id de su pedido es {pedidoId}</p>
                    </div>
                </div>
            </div>
        );
    }


    return (<>
        <section className="checkout p-5">
            <div className="container-xxl">
                <div className="row">

                    <div className="col-md-6">
                        <h1 className="mb-4 fs-3">Targeta de credito</h1>
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header p-0" id="headingTwo">
                                    <button className="btn col-12 btn-light btn-block text-start collapsed p-3 rounded-0 border-bottom-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className='col-6'>
                                                <span>Paypal</span>
                                            </div>
                                            <div className='col-6'>
                                                <img src={pay} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="card-body">
                                        <input type="text" className="form-control" placeholder="Paypal email" required />
                                    </div>
                                </div>
                            </div>
                            <div className="card m-auto">
                                <div className="card-header p-0">
                                    <button className="btn col-12 btn-light btn-block text-start p-3 rounded-0" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="col-6">
                                                <span>Credit card</span>
                                            </div>
                                            <div className="icons col-6">
                                                <img src={pay} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="card-body payment-card-body">
                                        <span className="font-weight-normal card-text">Card Number</span>
                                        <div className="input mb-4">
                                            <i className="fa fa-credit-card"></i>
                                            <input type="text" className="form-control" placeholder="0000 0000 0000 0000" required />
                                        </div>
                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-6">
                                                <span className="font-weight-normal card-text">Expiry Date</span>
                                                <div className="input">
                                                    <i className="fa fa-calendar"></i>
                                                    <input type="text" className="form-control" placeholder="MM/YY" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="font-weight-normal card-text">CVC/CVV</span>
                                                <div className="input mb-4">
                                                    <i className="fa fa-lock"></i>
                                                    <input type="text" className="form-control" placeholder="000" required />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 p-2">
                        <h1 className=" mt-3 mb-3 fs-3">Completa los siguientes detalles para el envío.</h1>
                        <form className="row g-3 mb-3" onSubmit={handleSubmit(comprar)}>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">email</label>
                                <input type="email" className="form-control" id="inputEmail4" required {...register("nombre")}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">contraeña</label>
                                <input type="password" className="form-control" id="inputPassword4" required {...register("email")} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Direccion</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" {...register("direccion")} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">Direccion 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, casa o piso" {...register("hogar")} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="inputCity" {...register("ciudad")} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Comuna</label>
                                <select id="inputState" className="form-select" {...register("comuna")}>
                                    <option value="Rancagua">Rancagua</option>
                                    <option value="Santiago">Santiago</option>
                                </select>

                            </div>
                           
                            <div className="col-12 mt-5">
                                <button id="button-linker" type="submit" >Proceder al pago</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>


        </section>
        
    </>)
}

export default Checkout