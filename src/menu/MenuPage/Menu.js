import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MenuPage.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      
        <Navbar className="mainnav">
          <Container>
            <Navbar.Brand style={{fontWeight: 'bold', fontSize:'50px'}} >
              <Link to={'/'} style={{textDecoration: 'none', color:'plum'}}>MuziC</Link>
            </Navbar.Brand>
            <Navbar.Offcanvas>
              
              <Offcanvas.Body style={{fontWeight: 'bold', fontSize:'20px'}}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to={'/'} style={{textDecoration: 'none', color:'plum'}}>Home</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to={'/explore'} style={{textDecoration: 'none', color:'plum'}}>Explore</Link>
                  </Nav.Link>

                  <Nav.Link >
                    <Link to={'/top100'} style={{textDecoration: 'none', color:'plum'}}>Top 100</Link>
                  </Nav.Link>

                  <NavDropdown title="More" style={{textDecoration: 'none', color:'white'}} className='success'>
                  
                    <NavDropdown.Item>
                      <Link to={'/login'} style={{textDecoration: 'none', color:'plum'}}>Log in</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link to={'/register'} style={{textDecoration: 'none', color:'plum'}}>Register</Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Track Name"
                    className="me-2"
                    aria-label="Search"
                    
                  />
                  <Button className='search-btn'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default Menu;