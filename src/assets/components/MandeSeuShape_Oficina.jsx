import React from 'react';
import styles from './MandeSeuShape_Oficina.module.css';
import imageShape from '../img/imgem_skate.jpg';

const MandeSeuShape = () => {
  return (
    <section className={styles.mandeseushapeContainer}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Mande seu Shape</h2>
        <p className={styles.description}>
          Sabe aquele shape que tá encostado, todo riscado ou trincado?<br />
          Não deixe ele morrer assim! Colocando fibra por fibra nos cantos <br />
          mais frágeis, preenchemos o interior com resina<br />
          e chapas novas, transformando o seu skate quebrado <br />
          em um novo parceiro de rolê. <br />
        </p>

        {/* Link externo com botão dentro */}
        <a
          href="https://www.correios.com.br/"  // link para mandar
          target="_blank"
          rel="noopener noreferrer"
        >
             {/* botão de manadar  */} 
          <button className={styles.button}>Mandar</button>
        </a>
      </div>

     {/* circulo */}
      <div className={styles.imageContainer}>
        <img src={imageShape} alt="Shape" className={styles.image} />
      </div>
    </section>
  );
};

export default MandeSeuShape;
