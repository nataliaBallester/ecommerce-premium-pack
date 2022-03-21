import  Navbar  from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'

function NavBar({children}){
    console.log (children)
    return(
        < >
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    {/*  Aca va el logo de la marca pero no me lo toma
                <img src='./marca.svg' width="50" height="30" className="d-inline-block align-top" />
                */}
                    PREMIUM PACK
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Platos</Nav.Link>
                        <NavDropdown title="Vasos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Linea Corazon</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Linea Cosmo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Linea Kraft</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#carrito">
                            <CartWidget/>
                        
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        { children }
        </>
        
    )
}

export default NavBar