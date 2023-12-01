import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Inicio" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Expande su negocio <br />
        </p>
        <p>
          Las mejores ventas en linea <br />
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contactanos"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Pongase en contacto
        </Link>
        <Link
          to="Contactanos"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Solocita una cotización
        </Link>
      </div>
    </div>
  );
};

export default Home;
