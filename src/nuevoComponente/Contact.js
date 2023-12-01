import React from "react";
import styles from "./Contact.module.css";


const Contact = () => {
  return (
    <div name="Contactanos" className={styles.contact}>
      <h2>Contactanos</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/718583e8-f2fc-4e02-a970-9f8a6eaa2036"
      >
        <label for="Name">Nombre completo</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Correo electrónico</label>
        <input
          id="Email"
          name="Email"
          type="Email"
          className={styles.input}
        ></input>
        <label for="Message">Escriba su mensaje</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
