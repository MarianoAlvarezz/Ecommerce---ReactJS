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
import { Link } from 'react-router-dom';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Inicio/>} />
          <Route path='/tienda' element={<ListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/detail/:id' element={<ItemDetail/>} />
        </Routes>

<br/><br/><br/>
        <div>
        <div class="imagenR "> <img src='https://d161wnnmtvsq6z.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkpYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bf93fc9b019441352885d9f5e3278267df9f3008/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9NWjNKaGRtbDBlVWtpQzJObGJuUmxjZ1k2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--95edbb0bab1d7422be375c13f5221f65be005f09/active_desktop_slider2.jpg'></img> </div>
        </div>


        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
