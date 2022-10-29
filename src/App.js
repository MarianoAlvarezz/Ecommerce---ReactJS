import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListContainer from './components/ListContainer';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetail';
import { CartContextProvider } from './context/cartContext';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Carousel from './components/Carousel';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Carousel/>
        <Routes>
        <Route path='/' element={<Inicio/>} />
          <Route path='/tienda' element={<ListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/detail/:id' element={<ItemDetail/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
