import { Link, NavLink } from "react-router-dom";
import './MenuPage.css'

      // Import Bootstrap
import { BsHouse , BsChat, BsHeart , BsSearch } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Menu() {
  return (
    <>
    <Navbar expand="lg" className="nav1">
      <Container>
        <Navbar.Brand><Link to='/instagram'>Shopping</Link></Navbar.Brand>
      </Container>
    </Navbar>
    
    
      <Navbar expand="bg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand ><Link to='/instagram'><BsHouse className="bshome" /> Home </Link></Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand><Link to='/search'><BsSearch /> Search</Link></Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand><Link to='/messages'><BsChat /> Message</Link></Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand><Link to='/notification'><BsHeart /> Notification</Link></Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  );
}
