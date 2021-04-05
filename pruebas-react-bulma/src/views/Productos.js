import React from 'react';
import { Columns } from 'react-bulma-components';
import ModalNuevoProducto from '../components/productos/ModalNuevoProducto';
import ProductoCard from '../components/productos/ProductoCard';

const Productos = () => {
    return (
        <div>
            <Columns  >
                <Columns.Column size={12}>
                    <ModalNuevoProducto />
                </Columns.Column>

                <Columns.Column size={3}>
                    <ProductoCard />
                </Columns.Column>
                <Columns.Column size={3}>
                    <ProductoCard />
                </Columns.Column>
                <Columns.Column size={3}>
                    <ProductoCard />
                </Columns.Column>
                <Columns.Column size={3}>
                    <ProductoCard />
                </Columns.Column>
                <Columns.Column size={3}>
                    <ProductoCard />
                </Columns.Column>
            </Columns>

        </div>
    )
}

export default Productos;