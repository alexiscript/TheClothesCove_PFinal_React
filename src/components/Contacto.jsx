import { useForm } from 'react-hook-form'


const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar =(data)=>{
        console.log( data)
    }

 
  
    return (
        <>
            <section className="contact-wrapper p-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 text-center fw-bold">
                            <h1 className=" text">Ponte en contacto con nosotros</h1>
                            <p className=' text fs-3'>Estamos a solo un paso de distancia de ti</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-wrapper-details p-5">
                <div className="container">
                    <div className="row text-center align-items-center">
                        <div className="col-lg-6 col-md-12 p-3">
                            <div className="map card m-auto embed-responsive embed-responsive-16by9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63826.53634427054!2d37.09345325!3d-1.04201225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126152c26!2sThika!5e0!3m2!1sen!2ske!4v1668532780442!5m2!1sen!2ske"
                                    allowFullScreen="" 
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google maps"
                                ></iframe>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card p-5">
                                <h2 className='footer-title mb-3'><b>Contactanos</b></h2>
                                <p className='mb-2'><b>Direccion:</b>  Thika town, Santiago,Chile, 2nd piso</p>
                                <p className='mb-2'><b>Telefono:</b>  <a className='footer-tel' href="tel:+1234567890">Call us at +1 (234) 567-890</a></p>
                                <p className='mb-4'><b>Atencion:</b>  8 a.m a 18:00 hrs</p>
                                <p>Siempre estamos aquí para escucharte. No dudes en contactarnos para cualquier consulta, comentario o solicitud que puedas tener. Nuestro equipo está comprometido en brindarte la mejor experiencia posible. Tu opinión es invaluable para nosotros y esperamos poder atenderte de manera eficiente. ¡Esperamos con interés saber de ti y poder colaborar juntos</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic veniam unde numquam in ullam laudantium odit explicabo itaque! Voluptate similique, accusantium consequatur provident soluta quaerat maxime adipisci vero sed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-message p-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
                            <div className="card p-5">
                                <h2 className='text-center mb-4'>Envianos un mensaje</h2>
                                <div className=" d-flex align-items-center justify-content-center">
                                    <form className="row g-3" onSubmit={handleSubmit(enviar)}>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control"  placeholder="Nombres" name='nombre' aria-label="First name" {...register("nombre")} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" {...register("apellido")} />
                                        </div>
                                        <div className='col-12'>
                                            <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Ingresa tu correo</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" {...register("email")} />

                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribe tu mensaje</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"{...register("mensaje")}></textarea>
                                        </div>
                                        <div className='col-12 text-center gap-2'>
                                            <button id='button-link' type="submit" >Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contacto