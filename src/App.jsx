import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Index from './paginas/Index';
import Salto from './paginas/Salto';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

      <Router>
        <div>
          <Header/>
          <Navbar/>

          <main>
            <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/salto" element={<Salto/>}/>
              <Route path="/doma" element={<Index/>}/>
              <Route path="/carreras" element={<Index/>}/>
              <Route path="/volteo" element={<Index/>}/>
              <Route path="/domaVaquera" element={<Index/>}/>
              <Route path="/western" element={<Index/>}/>
              <Route path="/calculadoraExperiencia" element={<Index/>}/>
              <Route path="/contacto" element={<Index/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>

    </>
  )
}

export default App
