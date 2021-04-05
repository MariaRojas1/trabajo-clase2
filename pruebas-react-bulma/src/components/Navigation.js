import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Section, Container } from 'react-bulma-components';
import Home from "../views/Home";
import Productos from "../views/Productos";
import Roles from "../views/Roles";
import Usuarios from "../views/Usuarios";
import NavbarCustom from "./productos/NavbarCustom";

const Navigation = () => {
    return (
        <Router>
            <>
                <NavbarCustom />
                <Section>
                    <Container>
                        <Switch>
                            <Route path="/productos" component={Productos} />
                            <Route path="/roles" component={Roles} />
                            <Route path="/usuarios" component={Usuarios} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </Container>
                </Section>
            </>
        </Router>
    )
}

export default Navigation;