import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';

const NavbarCustom = () => {

    return (

        <Navbar>
            <Navbar.Brand>
                <Navbar.Item renderAs="div">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Container>
                    <Navbar.Item renderAs="div" >
                        <Link to="/" className="navbar-item">Home</Link>
                    </Navbar.Item>
                    <Navbar.Item renderAs="div" >
                        <Link to="/usuarios" className="navbar-item">Usuarios</Link>
                    </Navbar.Item  >
                    <Navbar.Item renderAs="div">
                        <Link to="/roles" className="navbar-item">Roles</Link>
                    </Navbar.Item>
                    <Navbar.Item renderAs="div">
                        <Link to="/productos" className="navbar-item">Productos</Link>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}

export default NavbarCustom;