
# Proyecto Final: Ecommerce TheClothingCoves

Este es un proyecto de ecommerce básico que se utiliza para el curso de React de CODERHOUSE. La aplicación permite ver una lista de productos de calzado ,ropa deportiva y accesorios para posteriormente  realizar la  compras en línea. Tienes la posibilidad de registrarte como usuario o ingreasar con tu cuenta google  con Authentication ,ademas de generar tus pedidos y almacenarla en firebase.


## Instalacion

Para poder correr el proyecto necesitas realizar los siguientes pasos:

 - Descarga el proyecto y ábrelo en VisualStudioCode.
 - Ejecuta el comando ```npm install```  (para instalar dependencias necesarias para el proyecto).
 - Ejecuta el comando ```npm run start```  (para levantar el proyecto).    
## Tenologia Utilizadas

 - bootstrap: Libreria de componentes y estilos basados en Bootstrap para estilizar la aplicación.
 - react-icons: Libreria que ofrece distintos iconos que fueron usados en la aplicacion.
 - Firebase: Es una plataforma de desarrollo de aplicaciones móviles y web que proporciona una variedad de servicios en la nube. La libreria proporciona los metodos y funciones para poder interactuar con la Base de datos Firestore utilizada en este proyecto ademas de authentication para gestion de ocntraseña de forma segura 
 - react-router-dom: Es una librería que te permite manejar el enrutamiento en aplicaciones de React.






## Funcionalidades de la aplicacion

 - Navbar con categorias desplegables: Puede seleccionar una categoría y mostrara solo los productos pertenecientes a la misma.
 - Widget Carrito: El widget del carro de compras actualiza en tiempo real la cantidad de productos agregados y, si se pincha sobre el lleva a la vista de carro de compras.
 - Vista detalle: Proporciona una vista de detalle del producto seleccionado detallando su descripción, su valor unitario y permitiendo agregar al carro la cantidad deseada, si se presiona agregar al carrito se habilita el boton de terminar compra el cual cargara la vista carrito.
 - Vista Carrito: se puede acceder a ella pinchando el widget de carrito de compras o el boton terminar compra en la vista detalle del producto. Se proporciona el listado de productos agregados con su cantidad, precio unitario, subtotal y se tiene el icono de tarro de basura para eliminar cualquiera de ellos. Tambien muestra el total de la compra, proporciona un boton para limpiar el carro por completo y un boton de checkout que llevara a finalizar la compra.
 - Limpiar carro: Si se presiona este boton se limpia el carro de compras eliminando de la vista el detalle de lo que se tenia e indicando que no hay productos en el carro. Tambien se habilitara un boton para volver a los productos.
 - Checkout: Este boton carga un formulario que pedirá algunos datos del cliente para poder realizar la generación de la orden de compra. Solo se pasara a la vista del formulario si se tiene productos en el carro.
 - Login: Posibilidad de registar en authentication de firebase un correo y contraseña para posteriomente poder ingresar como usario a la tienda y generar orden de pedido segun su usuario.


## Authors

- [Imagen Base Datos Productos](https://drive.google.com/file/d/1dO2rSjpJLL7LDy-_aNVoXbEPhnJl5pe-/view?usp=drive_link)

- [Registro sesion google athentication](https://drive.google.com/file/d/1EAl0jY5IB2pb5XSRTSqcK8l8nP1pZ1RJ/view?usp=drive_link)

- [Registro base datos pedidos](https://drive.google.com/file/d/1SUAvpdpaIBaQI3xjJngA8abn9WfQfTYj/view?usp=drive_link)


- Aca dejo link a app [https://the-clothes-cove-p-final-react.vercel.app/ ](https://the-clothes-cove-p-final-react.vercel.app/)
- Aca dejo DEMO a app [https://drive.google.com/uc?id=167tutVINrWqxJpFjM5NdhyAaYKkpsM5q&export=download)


![Logo](https://avatars.githubusercontent.com/u/126620928?v=4)

