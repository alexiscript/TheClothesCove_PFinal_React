import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore' 
import { db } from '../firebase/data'
import { toast } from 'react-toastify'

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const id = useParams().id;
  

  useEffect(() => {
    const docRef = doc(db, 'productos', id)

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setItem({ ...resp.data(), id: resp.id });
        } else {
          toast.error('El producto no existe');
        }
      })
      .catch((error) => {
        console.error('Error obteniendo documento:', error);
      });

  }, [id])

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer;
