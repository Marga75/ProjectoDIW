import { useState } from 'react';

function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [idioma, setIdioma] = useState('es');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(true);

    if (nombre === '' || email === '' || mensaje === '') {
      setIsValid(false);
      if (idioma === 'es') {
        alert('Por favor, completa todos los campos.');
      } else {
        alert('Please complete all fields.');
      }
    } else {
      if (idioma === 'es') {
        alert(`Gracias, ${nombre}, por contactarnos. Te responderemos pronto.`);
      } else {
        alert(`Thank you, ${nombre}, for contacting us. We will respond to you soon.`);
      }
    }
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleIdiomaChange = (event) => {
    setIdioma(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Mensaje:
        <textarea value={mensaje} onChange={handleMensajeChange} />
      </label>
      <label>
        Idioma:
        <select value={idioma} onChange={handleIdiomaChange}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>
      </label>
      <button type="submit">Enviar</button>
      {isValid ? null : <p style={{ color: 'red' }}>Por favor, completa todos los campos.</p>}
    </form>
  );
}

export default FormularioContacto;
