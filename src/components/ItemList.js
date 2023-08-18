import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Item from '../components/Item/Item';
import Skeleton from 'react-loading-skeleton';

const ItemList = ({ productos }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      <div className='d-flex justify-content-center m-5'>
        <Link to="/category" className={`btn btn-outline-dark me-2 ${location.pathname === '/category' ? 'active' : ''}`}>TODO</Link>
        <Link to="/productos/poleron" className={`btn btn-outline-dark me-2 ${location.pathname === '/productos/poleron' ? 'active' : ''}`}>POLERONES</Link>
        <Link to="/productos/zapatillas" className={`btn btn-outline-dark me-2 ${location.pathname === '/productos/zapatillas' ? 'active' : ''}`}>ZAPATILLAS</Link>
        <Link to="/productos/poleras" className={`btn btn-outline-dark me-2 ${location.pathname === '/productos/poleras' ? 'active' : ''}`}>CAMISETAS</Link>
        <Link to="/productos/accesorios" className={`btn btn-outline-dark me-2 ${location.pathname === '/productos/accesorios' ? 'active' : ''}`}>ACCESORIOS</Link>
      </div>

      <section>
        <div className="container mt-3">
          <div className="row justify-content-center">
            {isLoading ? (
              <div className='col-md-11'>
                <Skeleton height={450} />
                <Skeleton height={350} />
                <Skeleton height={350} />
                <Skeleton height={350} />
              </div>
            ) : (
              productos.map((prod) => (
                <Item producto={prod} key={prod.id} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemList;
