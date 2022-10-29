import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import abc from './abc.jpeg';
import bbc from './bbc.jpg';

function Vision() {
	return (
		<div>
			<Container fluid className="bg-warning " style={{ height: '33rem' }}>
				<Row>
					<Col className=" col-lg-6  ">
						<Card style={{ width: '28rem' }} className="center-block m-5 bg-warning border-warning ">
							<Card.Body>
                            <h1 className="text-center text-primary">Vision</h1>							
								<Card.Text className="text-center h4 text_sm_small">
                                “To become the best online healthcare platform, employing the latest technology, that enables patients to meet all their medical requirements with ease and efficiency. We ensure that both healthcare providers and seekers are comfortable and confident to interact with each other.”
								</Card.Text>								
							</Card.Body>
						</Card>
					</Col>
					<Col className=" col-lg-6  ">
						<Card style={{ width: '28rem' }} className=" m-5 bg-warning border-warning">
							<Card.Body>
								<h1 className="text-center text-primary">Mission</h1>							
								<Card.Text className="text-center text_sm_small h4">
                                “We continuously strive to ensure that this platform and the services we offer prove highly beneficial to all our stakeholders, irrespective of their geography. We constantly improvise on the evolving technologies to enhance the scope of our services to benefit more people.”
								</Card.Text>								
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
            <Card style={{ width: '95rem' }}>
      <Card.Img variant="top" src={abc} style={{height:'30rem'}} />
      
    </Card>
    <Card style={{ width: '95rem' }}>
      <Card.Img variant="top" src={bbc} style={{height:'38rem'}} className="border-link" />
      
    </Card>
		</div>
	);
}

export default Vision;
