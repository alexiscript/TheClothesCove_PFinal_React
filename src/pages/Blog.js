import React from 'react'
import b1 from '../images/blog/b1.jpg'
import b5 from '../images/blog/b5.jpg'
import b2 from '../images/blog/b2.jpg'
import b3 from '../images/blog/b3.jpg'
import b4 from '../images/blog/b4.jpg'


const blog = () => {
  return <>
    <section className="blog-wrapper p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Leer mas</h1>
              <p className='text-white fs-3'>Conoce lo que dicen nuestros clientes de confianza...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blogs p-5">
      <div className="container-xxl container">
        <div className="row">
          <div className="d-flex flex-column align-items-center">
            <h1 className='mb-3'>Explora más en nuestra biblioteca</h1>
            <p className='mb-4'>Por qué tenemos conjuntos de moda en todas partes</p>
          </div>
          <div className="col-12 p-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={b1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clean</h5>
                    <p className="card-text"> "Marvel Clean ofrece una experiencia única. Con su atención meticulosa a los detalles y su compromiso con la calidad, se destaca como una opción excepcional. Cada producto muestra la habilidad artesanal y la pasión por la perfección. No es sorprendente que sus creaciones estén ganando popularidad en todas partes. Desde sus diseños innovadores hasta la selección de materiales de primera calidad, Marvel Clean realmente se distingue en el mundo de la moda."</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 p-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={b2} alt="" className='img-fluid rounded-start mt-5' />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text">"Melisa Ivy brilla con un encanto distintivo. Sus creaciones capturan la esencia de la elegancia moderna con un toque de audacia. Cada pieza es como una obra de arte, cuidadosamente elaborada para resaltar la belleza individual. Con una combinación experta de colores y texturas, Melisa Ivy ha cautivado a seguidores de la moda en todas partes. Su enfoque en la originalidad y la creatividad la convierte en una figura destacada en la industria. Explorar su colección es adentrarse en un mundo donde el estilo cobra vida en cada puntada y detalle meticuloso".</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 p-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={b3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Tristian Ann</h5>
                    <p className="card-text">"Tristian Ann irradia una elegancia innegable. Sus creaciones son un testimonio de su habilidad excepcional para fusionar el estilo clásico con elementos contemporáneos. Cada pieza es una expresión de su pasión por la moda y su compromiso con la calidad. La atención meticulosa a los detalles y la selección cuidadosa de materiales demuestran su dedicación al arte. Con una paleta de colores inspirada y diseños que reflejan su singular visión, Tristian Ann ha dejado una impresión duradera en la escena de la moda. Explorar su colección es sumergirse en un mundo donde el estilo y la creatividad convergen en una fusión única".</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 p-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={b4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Shara Connor</h5>
                    <p className="card-text">"Shara Connor personifica la gracia y la elegancia. Como modelo, cautiva con su presencia magnética en la pasarela y las cámaras. Cada pose es una obra maestra en sí misma, capturando la esencia de la moda con cada movimiento. Su versatilidad le permite adaptarse a una amplia gama de estilos y escenarios, convirtiéndola en una elección destacada para diseñadores y marcas de renombre. Shara lleva la moda más allá de las prendas; ella la encarna con cada mirada y gesto. Su influencia en la industria es innegable y su impacto perdurará en la memoria de todos aquellos que la admiran".</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 p-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={b5} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Sussan Antony</h5>
                    <p className="card-text">"Sussan Antony encarna la esencia de una supermodelo de Victoria's Secret. Su presencia en la pasarela es cautivadora, con cada paso y pose que transmite una confianza y gracia incomparables. Como una de las caras icónicas de la marca, Sussan deslumbra con su capacidad de llevar a la vida la ropa interior y las prendas más sensuales. Su elegancia natural se mezcla con una actitud poderosa, creando una combinación irresistible. A través de su estilo único y su carisma deslumbrante, Sussan Antony ha dejado una marca imborrable en la historia de la moda y sigue siendo un faro de inspiración para modelos aspirantes en todo el mundo."</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default blog