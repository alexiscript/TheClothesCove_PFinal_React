import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/CheckOut";
import { AuthProvider } from "./context/auto/AuthContext";
import FormsFirebase from "./pages/FormsFirebase";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';






function App() {
  return (

    <CartProvider>
      
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/Nosotros" element={<Blog />} />
            <Route path='/Login' element={<FormsFirebase />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </CartProvider>


  );
}

export default App;
