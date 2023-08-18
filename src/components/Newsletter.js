import React from 'react'
import { Link } from 'react-router-dom';

const Newsletter = () => {
    return <>
        <section className="news-letter p-5">
            <div className="container-xxl">
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="d-flex flex-column align-items-center">
                            <h2 className='mb-3'>Suscríbete a nuestro boletín de noticias</h2>
                            <h5>Recibe actualizaciones por correo electrónico sobre todo lo nuestro. <Link>Especiales Ofertas</Link></h5>
                        </div>
                    </div>
                    <div className="col-md-6 details d-flex flex-column justify-content-center">
                        <div className="input-group mb-3">
                            <input type="text" id='news-input' className="form-control" placeholder="@example.com" aria-label="@example.com" aria-describedby="basic-addon2" />
                            <button className="input-group-text" id="basic-addon2">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default Newsletter   