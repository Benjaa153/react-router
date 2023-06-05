import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Nosotros from './Pages/Nosotros'
import PaginaNoEncontrada from './Pages/PaginaNoEncontrada';
import Tienda from './Pages/Tienda'
import Footer from './Components/Footer';
import './Styles/App.css';

import { BrowserRouter as Router, 
         Routes as Rutas, 
         Route as Ruta } 
from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
        <Rutas>
          <Ruta path='/' element={<Home></Home>}></Ruta>
          <Ruta path='/nosotros' element={<Nosotros></Nosotros>}></Ruta>
          <Ruta path='/tienda' element={<Tienda></Tienda>}></Ruta>
          <Ruta path='/*' element={<PaginaNoEncontrada></PaginaNoEncontrada>}></Ruta>
        </Rutas>
      <Footer/>
    </Router>
  );
}

export default App;
