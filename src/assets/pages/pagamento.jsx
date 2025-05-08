import styles from './pagamento.css';
import { useState } from 'react';

function Pagamento() {
  const [metodo, setMetodo] = useState('');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.voltar}>&larr;</span>
        <h1>Comprar</h1>
        <span className={styles.cart}>🛒</span>
      </header>

      <section className={styles.produto}>
        <div className={styles.imgPlaceholder}>Imagem</div>
        <div className={styles.detalhes}>
          <h2>Tenis bla ble blu</h2>
          <p>Cor tal tal</p>
          <p>Tamanho ~ Tal tal</p>
          <p>Quantidade</p>
        </div>
        <div className={styles.valor}>R$414,00</div>
      </section>

      <section className={styles.cupom}>
        <p>Cupom de desconto automático!</p>
        <div className={styles.cupomCodigo}>RUA8</div>
      </section>

      <section className={styles.entrega}>
        <div className={styles.envio}>SEDEX</div>
        <p>Chegada entre dia <strong>07 e 08 de maio</strong></p>
      </section>

      <section className={styles.pagamento}>
        <h3>Forma de Pagamento</h3>
        <label>
          <input
            type="radio"
            name="pagamento"
            value="cartao"
            checked={metodo === 'cartao'}
            onChange={() => setMetodo('cartao')}
          />
          <span className={styles.opcao}>Cartão Débito e Crédito 💳</span>
        </label>
        <label>
          <input
            type="radio"
            name="pagamento"
            value="pix"
            checked={metodo === 'pix'}
            onChange={() => setMetodo('pix')}
          />
          <span className={styles.opcao}>Pix ou Boleto 📄</span>
        </label>
      </section>

      <div className={styles.faixa}>RUA - RUA - RUA - RUA</div>

      <section className={styles.resumo}>
        <div className={styles.linha}><span>Frete</span><span>Grátis</span></div>
        <div className={styles.linha}><span>Cupom</span><span>-R$100,00</span></div>
        <div className={styles.total}><span>Valor Total</span><span>R$200,00</span></div>
      </section>

      <button className={styles.continuar}>Continuar</button>
    </div>
  );
}

export default Pagamento;
