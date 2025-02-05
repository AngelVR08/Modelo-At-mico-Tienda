import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="btn btn-success" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
