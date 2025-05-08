import './pagamento.css';

import Faixa from '../img/FAIXA.png';


function Pagamento() {
  return (
    <div className="pagamento-container">
      <h1 className="titulo">Finalizar Compra</h1>

      <div className="box produto">
        <div className="imagem-produto">Imagem</div>
        <div>
          <p className="nome-produto">Tênis bla ble blu</p>
          <p className="detalhes">Cor tal tal · Tamanho tal tal · Quantidade</p>
        </div>
        <div className="preco">R$414,00</div>
      </div>

      <div className="box cupom">
        <p className="info-cupom">Cupom de desconto aplicado automaticamente!</p>
        <div className="codigo-cupom">RUA8</div>
      </div>

      <div className="box envio">
        <div className="etiqueta-sedex">SEDEX</div>
        <p>Chegada entre os dias <strong>07 e 08 de maio</strong></p>
      </div>

      <div className="box pagamento-forma">
        <p className="subtitulo">Forma de Pagamento</p>
        <label className="opcao">
          <input type="radio" name="pagamento" />
          <span>Cartão Débito e Crédito</span>
        </label>
        <label className="opcao">
          <input type="radio" name="pagamento" />
          <span>Pix ou Boleto</span>
        </label>
      </div>

      <div className={Styles.faixacar}>
        <img src={Faixa} alt="Faixa decorativa" />
      </div>

 
      <div className="resumo">
        <div className="linha"><span>Frete</span><span>Grátis</span></div>
        <div className="linha"><span>Cupom</span><span>-R$100,00</span></div>
        <div className="linha total"><span>Total</span><span>R$200,00</span></div>
        <button className="botao-continuar">Continuar</button>
      </div>
    </div>
  );
}

export default Pagamento;
