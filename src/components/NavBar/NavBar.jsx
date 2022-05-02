import  Navbar  from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar(){
    //console.log (children)

    return(
        < >
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <NavLink to='/' >
                    {/*  Aca va el logo de la marca pero no me lo toma */}
                    <img src='../img/logo.jpeg' width="80" height="80" className="d-inline-block align-top" alt="PREMIUM PACK" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/category/vasos lisos">Vasos Lisos</NavLink>
                        <NavLink to="/category/vasos corazon">Vasos Diseño</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to='/cart'>
                            <CartWidget/>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* children */}
        </>
        
    )
}

export default NavBar