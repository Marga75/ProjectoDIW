import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="selectorIdioma">
                <label data-key="lenguaje" htmlFor="idioma">Selecciona un idioma:</label>
                <select id="idioma">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
        </footer>
    )
}

export default Footer