import "../css/Comun.css";
import "../css/Contacto.css";

function Contacto() {
  return (
    <>
      <div className="contenedor-formulario">
        <h2 data-key="encabezado" className="contacto">
          Contacto
        </h2>

        <div className="formulario">
          <form id="formulario" method="post">
            <label data-key="nombre" htmlFor="nombre">
              Nombre
            </label>
            <input type="text" id="nombre" name="nombre" />

            <label data-key="email" htmlFor="email">
              Correo Electrónico
            </label>
            <input type="email" id="email" name="email" />

            <label data-key="mensaje" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea name="mensaje" id="mensaje" rows="5"></textarea>

            <button data-key="enviar" className="boton" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacto;
