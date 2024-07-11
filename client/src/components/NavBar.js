import '../styles/styles.css'; 
import {Image} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'; 
const NavBar = () =>{
  return (
    <>
      <Navbar bg="white" style={{position: 'fixed', top: 0,fontFamily: 'Dela Gothic One'}}>
           <Navbar.Brand style={{margin:'10px'}}>
              <Image src={logo} alt="Logo" width="51" height="64"  /> 
            </Navbar.Brand>
            <Nav class="navbar navbar-scroll">    
            <Nav.Link href="#about">О ШКОЛЕ</Nav.Link>
            <Nav.Link href="#training">ОБУЧЕНИЕ</Nav.Link>
            <Nav.Link href="#program">ПРЕДМЕТЫ И ТЕМЫ</Nav.Link>
            <Nav.Link href="#AccomodationAndFood">ПРОЖИВАНИЕ И ПИТАНИЕ</Nav.Link>
            <Nav.Link href="#HowToEnroll">КАК ПОСТУПИТЬ</Nav.Link>
            <Nav.Link href="#cost">СТОИМОСТЬ</Nav.Link>
            <Nav.Link href="#7">ВОПРОСЫ</Nav.Link>
            <Nav.Link href="#contacts">КОНТАКТЫ</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;