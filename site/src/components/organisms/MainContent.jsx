import React from 'react';
import Cart from './Cart';
import CartSummary from '../molecules/CartSummary';

const MainContent = () => (
    <div className="main-container">
        <div className="main-content">
            <Cart />
            <CartSummary />
        </div>
    </div>
);

export default MainContent;
