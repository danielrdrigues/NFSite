import logo from '../logo.svg';
import { Navbar, NavDropdown, Nav, Container } from 'solid-bootstrap';

//import { setShowCart, cartItems } from '../App';

function Header(){

    return (
        <Nav defaultActiveKey="#" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="#">Discord</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Jogar</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Instagram</Nav.Link>
  </Nav.Item>
</Nav>
    )
} 
export default Header;