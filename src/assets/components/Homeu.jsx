import Styles from './Home.module.css';
import foto from '../img/fotofundo.png';
import faixa from '../img/faixa.png';
import skate from '../img/skatespromo.png';
import Sustentabilidade from './Sustentabilidade';
import Skates from './Skates';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <div className={Styles.rua}>
        <img src={foto} alt="" />
      </div>

      <div className={Styles.faixa}>
        <img src={faixa} alt="" />
      </div>

      <Skates />

      <div className={Styles.promo}>
        <div className={Styles.skates}>
          <img src={skate} alt="" />
        </div>

        <div className={Styles.promocao}>
          <h1>
            <span>Shapes</span> Maple restaurados
          </h1>
          <button>
            <Link to="/oficina">Saiba mais</Link>
          </button>
        </div>
      </div>

      <Sustentabilidade />
    </section>
  );
}

export default Home;
