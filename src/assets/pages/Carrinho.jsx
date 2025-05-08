import Styles from './Carrinho.module.css';
import Faixa from '../img/FAIXA.png';
import Car from '../img/carrinho.png';
import SKT from '../img/Skate.png';
import BOTOM from '../img/botão.png';
import Header_Oficina from '../components/Header_Oficina';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer_Oficina';

function Carrinho() {
  return (
    <>
    <Header_Oficina />
    <section className={Styles.fundocar}>
      <div className={Styles.textocar}>
        <h1 className={Styles.Debora}>Olá, Débora Paixão!</h1>
        <div className={Styles.compra}>
          <p>Carrinho de compras</p>
          <img src={Car} alt="Carrinho" />
        </div>
      </div>

      <div className={Styles.faixacar}>
        <img src={Faixa} alt="Faixa decorativa" />
      </div>

      <section className={Styles.Meio}>
        <div className={Styles.skt}>
          <div className={Styles.Botom}>
            <img src={BOTOM} alt="Remover item" />
          </div>
          <div className={Styles.produto}>
            <img src={SKT} alt="Shape de skate" />
          </div>
          <div className={Styles.textos}>
            <h2 className={Styles.SPM}>Shape Profissional maple (Recondicionado)</h2>
            <h3 className={Styles.v}>Valor: R$ 250,00</h3>
            <h3 className={Styles.Qtd}>Qtd. 1</h3>
          </div>
        </div>
      </section>

      <div className={Styles.faixacar}>
        <img src={Faixa} alt="Faixa decorativa" />
      </div>

      <div className={Styles.valortotal}>
        <h3 className={Styles.totaal}>Valor Total</h3>
        <p className={Styles.va}>R$ 250,00</p>
        <Link to="/inicio"><button>Continuar</button></Link>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Carrinho;
