import React, { useState } from 'react';
import { Button, Modal } from 'react-bulma-components';
import FormProducto from './FormProducto';

const ModalNuevoProducto = () => {
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => setMostrarModal(false);
    return (
        <div>
            <Button color='primary' onClick={abrirModal}>Agregar producto</Button>
            <Modal show={mostrarModal} onClose={cerrarModal} >
                <Modal.Content>
                    <FormProducto />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ModalNuevoProducto;