import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Index from "./paginas/Index";
import Salto from "./paginas/Salto";
import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Doma from "./paginas/Doma";
import Carreras from "./paginas/carreras";
import Volteo from "./paginas/volteo";
import DomaVaquera from "./paginas/domaVaquera";
import Western from "./paginas/Western";
import Contacto from "./paginas/contacto";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/salto" element={<Salto />} />
              <Route path="/doma" element={<Doma />} />
              <Route path="/carreras" element={<Carreras />} />
              <Route path="/volteo" element={<Volteo />} />
              <Route path="/domaVaquera" element={<DomaVaquera />} />
              <Route path="/western" element={<Western />} />
              <Route path="/calculadoraExperiencia" element={<Index />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
