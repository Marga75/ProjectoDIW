import "../css/Footer.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Footer() {
    const [idioma, setIdioma] = useState(localStorage.getItem("idioma") || "es");

    // Usamos useLocation para escuchar los cambios de ruta sin refrescar la página
    const location = useLocation();
  
    // Función para obtener el nombre de la página desde la URL (como antes)
    const obtenerPaginaActual = () => {
      let pagina = location.pathname.split("/").pop(); 
      if (!pagina || pagina === "index.html") return "Index"; // Página por defecto
      return pagina.replace(".html", "").charAt(0).toUpperCase() + pagina.slice(1); // Primera letra mayúscula
    };
  
    const [paginaActual, setPaginaActual] = useState(obtenerPaginaActual());
  
    useEffect(() => {
      // Cambiar paginaActual al cambiar de ruta
      setPaginaActual(obtenerPaginaActual());
    }, [location]); // El efecto se ejecuta cuando cambia la ruta
  
    useEffect(() => {
      const cargarTraducciones = async () => {
        try {
          const respuesta = await fetch(`/json/${idioma}.json`);
          if (!respuesta.ok) throw new Error(`HTTP error! status: ${respuesta.status}`);
  
          const datos = await respuesta.json();
          console.log("📌 JSON obtenido:", datos);
  
          if (datos[paginaActual]) {
            console.log("✅ Traducciones para", paginaActual, ":", datos[paginaActual]);
  
            Object.keys(datos[paginaActual]).forEach((clave) => {
              const elemento = document.querySelector(`[data-key="${clave}"]`);
              if (elemento) {
                console.log(`🔄 Reemplazando texto en [data-key="${clave}"]:`, datos[paginaActual][clave]);
                elemento.innerHTML = datos[paginaActual][clave];
              } else {
                console.warn(`⚠️ No se encontró el elemento [data-key="${clave}"] en la página`);
              }
            });
          } else {
            console.warn(`⚠️ No hay traducciones para la página '${paginaActual}' en ${idioma}.json`);
          }
        } catch (error) {
          console.error("❌ Error al cargar las traducciones:", error);
        }
      };
  
      cargarTraducciones();
    }, [idioma, paginaActual]); // Vuelve a ejecutar cuando cambia el idioma o la página
  
    const cambiarIdioma = (event) => {
      const idiomaSeleccionado = event.target.value;
      localStorage.setItem("idioma", idiomaSeleccionado);
      setIdioma(idiomaSeleccionado);
    };

  return (
    <footer className="footer">
      <div className="selectorIdioma">
        <label data-key="lenguaje" htmlFor="idioma">
          Selecciona un idioma:
        </label>
        <select id="idioma" onChange={cambiarIdioma} value={idioma}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
