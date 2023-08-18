import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
          toast.success('Producto agregado con exito');      

        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
            
        } else {
            nuevoCarrito.push(itemAgregado);
            
           
        }
        setCarrito(nuevoCarrito);
       
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
    }

    const eliminarItem = (itemId) => {
        const itemAEliminar = carrito.find((producto) => producto.id === itemId);

        if (itemAEliminar) {
            if (itemAEliminar.cantidad > 1) {
                const nuevoCarrito = carrito.map((producto) => {
                    if (producto.id === itemId) {
                        return { ...producto, cantidad: producto.cantidad - 1 };
                    }
                    return producto;
                    
                });
                setCarrito(nuevoCarrito);
            } else {
                const nuevoCarrito = carrito.filter((producto) => producto.id !== itemId);
                setCarrito(nuevoCarrito);
            }
        }
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }
    

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarItem }}>
            {children}
        </CartContext.Provider>
    )
}
