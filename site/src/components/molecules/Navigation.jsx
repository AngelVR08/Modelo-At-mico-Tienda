import React from 'react';
import NavLink from '../atoms/NavLink';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <NavLink href="#">Inicio</NavLink>
                <NavLink href="#">Ropa</NavLink>
                <NavLink href="#">Calzado</NavLink>
                <NavLink href="#">Accesorios</NavLink>
                <NavLink href="#">Suplementos</NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;
