import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bulma-components';

const Roles = () => {
    const [datos, setDatos] = useState([]);
    const obtenerRoles = async () => {
        try {
            const response = await axios.get('http://localhost:3200/roles/obtener');
            console.log(response);
            setDatos(response.data.roles);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        obtenerRoles();
    }, [])
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        datos.map((rol) => <tr key={rol.id}>
                            <th>{rol.id}</th>
                            <th>{rol.nombre}</th>
                        </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Roles;