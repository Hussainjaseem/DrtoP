import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
function About() {
	return (
		<div>
			<Container fluid className=" h6 text-center " style={{ height: '20rem', backgroundColor: 'darkblue' }}>
				<CardGroup className=" text justify-content-center" style={{ backgroundColor: 'darkblue' }}>
					><Card style={{ width: '18rem', backgroundColor: 'darkblue' }}>
						<Card.Header className=" h4 text-white">DrtoP</Card.Header>
						<ListGroup variant="flush" >
							<Nav defaultActiveKey="/home" className="flex-column ">
								<Nav.Link className="text-light" eventKey="link-2">
									About Us
								</Nav.Link>

								<Nav.Link className="text-light" eventKey="link-1">
									Privacy policy
								</Nav.Link>
								<Nav.Link className="text-light" eventKey="link-1">
									Terms and Conditions
								</Nav.Link>
							</Nav>
						</ListGroup>
					</Card>
					<Card style={{ width: '18rem',backgroundColor:'darkblue',borderColor:'darkblue' }} >
						<Card.Header className=" h4 text-white">Patients</Card.Header>
						<ListGroup variant="flush" >
							<Nav defaultActiveKey="/home" className="flex-column ">
								<Nav.Link className="text-light" eventKey="link-2">
									Search For Doctors
								</Nav.Link>

								<Nav.Link className="text-light" eventKey="link-1">
									Login
								</Nav.Link>
							</Nav>
						</ListGroup>
					</Card>
					<Card style={{ width: '18rem',backgroundColor:'darkblue',borderColor:'darkblue' }} >
						<Card.Header className=" h4 text-white">Doctors</Card.Header>
						<ListGroup variant="flush" >
							<Nav defaultActiveKey="/home" className="flex-column ">
								<Nav.Link className="text-light" eventKey="link-1">
									Login
								</Nav.Link>
								<Nav.Link className="text-light" eventKey="link-2">
									Register
								</Nav.Link>
							</Nav>
						</ListGroup>
					</Card>
					<Card style={{ width: '18rem',backgroundColor:'darkblue',borderColor:'darkblue' }} >
						<Card.Header className=" h4 text-white">Hospitals</Card.Header>
						<ListGroup variant="flush" >
							<Nav defaultActiveKey="/home" className="flex-column ">
								<Nav.Link className="text-light" eventKey="link-1">
									Manage Hospital
								</Nav.Link>
								<Nav.Link className="text-light" eventKey="link-2">
									Login
								</Nav.Link>
							</Nav>
						</ListGroup>
					</Card>
					<Card style={{ width: '18rem',backgroundColor:'darkblue',borderColor:'darkblue' }} >
						<Card.Header className="h4 text-white">Clinics</Card.Header>
						<ListGroup variant="flush" >
							<Nav defaultActiveKey="/home" className="flex-column ">
								<Nav.Link className="text-light" eventKey="link-1">
									Manage Clinic
								</Nav.Link>
								<Nav.Link className="text-light" eventKey="link-2">
									Login
								</Nav.Link>
							</Nav>
						</ListGroup>
					</Card>
					<Card style={{ width: '18rem',backgroundColor:'darkblue',borderColor:'darkblue' }} >
						<Card.Header className=" h4 text-white">Follow us on</Card.Header>
						<ListGroup variant="flush" >
							<Nav defaultActiveKey="/home" className="flex-column " >
								<Nav.Link className="text-light" href="/home">
									facebook
								</Nav.Link>
								<Nav.Link className="text-light" eventKey="link-1">
									Mail
								</Nav.Link>
								<Nav.Link className="text-light" eventKey="link-2">
									YouTube
								</Nav.Link>
							</Nav>
						</ListGroup>
					</Card>
				</CardGroup>
			</Container>
		</div>
	);
}

export default About;
