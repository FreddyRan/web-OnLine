import React from "react";
import styles from "./Benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";


const Benefits = () => {
  return (
    <div name="Beneficios" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
      Beneficios de hacer negocios con nosotros
      </h2>
      <p>
      Amplio Catálogo de Productos <BsFillDoorOpenFill />
      </p>
      <p>
      Envío Rápido y Confiable<FaPeopleCarry />
      </p>
      <p>
        Precios Bajos <FaMoneyBillAlt />
      </p>
      <p>
      Horarios extendidos<AiOutlineSchedule />
      </p>
      <p>
      Ventas en lineas mas seguras<AiOutlineRise />
      </p>
      <p>
      Actualizaciones Regulares de Inventario<FiRepeat />
      </p>
    </div>
  );
};

export default Benefits;
