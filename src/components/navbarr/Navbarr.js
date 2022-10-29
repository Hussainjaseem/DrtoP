import React from 'react'
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container  from 'react-bootstrap/Container';
import www from './www.png';
function Navbarr() {
  return (
    <div>
         <Navbar bg="light" expand="lg" fixed="top">
				<Container>
					
					<img src={www} href="#home" style={{height:'40px'}}/>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav ">
						
						
						
						<Nav className="ms-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">About</Nav.Link>
							<Nav.Link href="#link">Features</Nav.Link>
							<Nav.Link href="#link">Download</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1"> Login as Docter</NavDropdown.Item>

								<NavDropdown.Item href="#action/3.2">Consult a Docter </NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
    </div>
  )
}

export default Navbarr