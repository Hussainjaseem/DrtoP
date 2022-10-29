
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import drp from './drp.png';
import drpi from './drpi.png';
import drpp from './drpp.png';

function Cartoonapp() {
	return (
		<div>
			<Container >
				<Row className="content-justify-between">
					<Col className="col-lg-4">
						<Card className="border-white" style={{ width: '18rem' }}>
							<Card.Img variant="top" src={drp} style={{ height: '18rem' }}/>
							<Card.Body>
								<Card.Title className=" text-primary">1. Download the DrtoP App</Card.Title>
								<Card.Text className="text-center  text-dark card-text fs-6 fw-light">
                                Install DrtoP mobile application in your smartphone.
								</Card.Text>
								
							</Card.Body>
						</Card>
					</Col>
                    <Col  className="col-lg-4">
						<Card className="border-white" style={{ width: '18rem' }}>
							<Card.Img variant="top" src={drpi} style={{ height: '18rem' }}/>
							<Card.Body>
								<Card.Title className=" text-primary">2. Book your appointment</Card.Title>
								<Card.Text className="text-center  text-dark card-text fs-6 fw-light">
                                Choose your doctor across the specialities and book your convenient time for consultation.
								</Card.Text>
								
							</Card.Body>
						</Card>
					</Col>
                    <Col  className="col-lg-4">
						<Card className="border-white" style={{ width: '18rem' }}>
							<Card.Img variant="top" src={drpp} style={{ height: '18rem' }}/>
							<Card.Body>
								<Card.Title className=" text-primary text-center">3. Get medical consult, advice & prescriptions</Card.Title>
								<Card.Text className="text-center  text-dark card-text fs-6 fw-light ">
                                After consultation get your prescription, advice and lab order on your phone.
								</Card.Text>
								
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Cartoonapp;
