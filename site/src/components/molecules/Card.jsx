import React from 'react';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import './Card.css';

const Card = ({ imgSrc, title, text, buttonText, formId }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <Image src={imgSrc} alt={title} width="200px" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Button>{buttonText}</Button>
        <form id={formId}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="tel">Número telefónico:</label>
          <input type="tel" id="tel" name="tel" />
          <br />
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" />
          <br />
          <input type="submit" value="Enviar" />
        </form>
        <p id={`successMessage${formId}`} style={{ display: 'none', color: 'green', marginTop: '10px' }}>
          ¡Gracias por su compra!
        </p>
      </div>
    </div>
  );
};

export default Card;
