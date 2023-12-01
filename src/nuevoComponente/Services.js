import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>VENTAS POR MAYOR ONLINE</p>
      <img
        className={styles.webImage}
        src={require("../imagenes/por_mayor.jpg")}
      ></img>
    </div>
  );
};

export default Services;
