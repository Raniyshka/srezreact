import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

export function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Грызуны</Navbar.Brand>
          <Nav className={s.meAuto}>
            <NavLink className={s.btn} to='/catalog'>catalog</NavLink>
            <NavLink className={s.btn} to='/'>home</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
