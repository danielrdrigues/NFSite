import logo from '../logo.svg';
import { Navbar, NavDropdown, Nav, Container } from 'solid-bootstrap';

//import { setShowCart, cartItems } from '../App';

function Header(){

    return (
        <Nav defaultActiveKey="#" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="https://discord.gg/nafaixa">Discord</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="https://cfx.re/join/j6vp34">Jogar</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="https://www.instagram.com/nafaixagg/">Instagram</Nav.Link>
  </Nav.Item>
</Nav>
    )
} 
export default Header;