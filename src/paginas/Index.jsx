import '../css/Index.css';
import salto2 from '../assets/salto2.webp';
import doma2 from '../assets/doma2.webp';
import carreras2 from '../assets/carrerasTrotones2.webp';
import portada from '../assets/portada.webp';
import volteo from '../assets/volteo.webp';
import domaVaquera from '../assets/domaVaquera.webp';
import western from '../assets/western.webp';
import { Link } from "react-router-dom";

function Index() {
    return (
        <>

            <div className="contenedor">

                <div className="columna izquierda">
                    <Link to="/salto"><img src={salto2} alt="Salto"/></Link>
                    <Link to="/doma"><img src={doma2} alt="Doma"/></Link>
                    <Link to="/carreras"><img src={carreras2} alt="Carreras"/></Link>
                </div>

                <div className="columna intro">
                    <h2 data-key="encabezado" className="apartado">¿Qué es la equitación?</h2>
                    <p data-key="texto1">La equitación es el arte de montar a caballo, una especialidad dentro de los deportes ecuestres en la que se evalúa tanto al jinete como al caballo. Pero lo cierto es que, si bien ellos son los protagonistas, aspectos como la vestimenta o la limpieza y el pulido del caballo son otros factores de gran importancia. En la equitación, el jinete ha de demostrar sus habilidades y destrezas en el dominio del caballo, manteniéndose en equilibrio con el animal, mostrando la postura correcta en cada movimiento y haciendo gala de una actitud dominante y relajada a la vez, dirigiendo al caballo con total soltura y determinación.
                    </p>

                    <p data-key="texto2">
                        La relación entre el caballo y el jinete se basa en tres principios: confianza del caballo en el jinete, liderazgo del jinete y óptima comunicación entre ellos. Tales principios permiten desplegar los aires o tipos de paso del caballo como la partida, la parada, el paso, el trote, el galope y el galope tendido.
                    </p>

                    <p data-key="texto3">
                        En la actualidad, la equitación engloba una serie de disciplinas con diferentes niveles de dificultad y características propias.
                    </p>

                    <img className="img-central" src={portada} alt="portada"/>
                </div>

                <div className="columna derecha">
                    <Link to="/volteo"><img src={volteo} alt="Volteo"/></Link>
                    <Link to="/domaVaquera"><img src={domaVaquera} alt="Doma Vaquera"/></Link>
                    <Link to="/western"><img src={western} alt="Western"/></Link>
                </div>
            </div>
        </>
    )
}

export default Index;