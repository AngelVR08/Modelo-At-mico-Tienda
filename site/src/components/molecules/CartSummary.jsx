import React from 'react';
import Button from '../atoms/Button2';

const CartSummary = () => {
    return (
        <div className="summary">
            <h2>Resumen de compra</h2>
            <hr />
            <p>Productos <span>$0</span></p>
            <p>Total <span>$0</span></p>
            <Button>Comprar</Button>
        </div>
    );
};

export default CartSummary;
