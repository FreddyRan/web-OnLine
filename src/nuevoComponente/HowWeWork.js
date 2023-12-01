import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../componentes/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " En eCommerceExpress, trabajamos incansablemente para ofrecerte una experiencia de compra en línea sin complicaciones. ",   
    },
    {
      text: "Explora nuestro catálogo: Descubre una amplia gama de productos de alta calidad.",
      id: 1,
    },
    {
      text: "Regístrate y Aprueba tu Cuenta Myorista: Acceder a beneficios exclusivos",
      
      id: 2,
    },
    {
      text: "Precios Competitivos y Descuentos al Por Mayor: Queremos hacer crecer tu negocio.  ",
      id: 3,
    },
    {
      text: "Actualizaciones Periódicas del Inventario: Encontrarás las últimas tendencias y productos en nuestra plataforma ",
      id: 4,
    },
  ];

  return (
    <div name="Trabaja con nosotros" className={styles.howWeWork}>
        <h2 className={styles.title}>¿COMO TRABAJAMOS?</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;
