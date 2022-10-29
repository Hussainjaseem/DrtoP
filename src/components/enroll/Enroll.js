import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import docc from './docc.png';

function Enroll() {
	return (
		<div>
			<Container fluid className="bg-warning" style={{ height: '12rem' }} >
				<Row>
					<Col className="col-lg-12">
						<h2 className="fw-bold pt-0 pt-lg-5 pt-md-4 mb-3 text-center text-#F1C40F;">
							BEST DOCTORS <br />ACROSS ALL SPECIALITIES
						</h2>
					</Col>
				</Row>
			</Container>
			<Container fluid className="bg-warning  position-relative" style={{ height: '25rem' }}>
				<Row>
					<Col className="col-lg-12  " >
						<Card  className="bg-warning border-warning" style={{ width: '64rem'}}>
							<Card.Img className="img-responsive position-absolute " variant="center"  style={{ height: '25rem',marginLeft:'16rem' }}  src={docc} >
                        
                            </Card.Img>
                            <Card.ImgOverlay className="position-absolute">
                                <Button className='justify-content-center h3 ' type="checkbox" variant='light' style={{borderColor:'darkblue',marginLeft:'42rem',marginTop:'20rem'}}  size="lg">Enroll Now</Button>
                                </Card.ImgOverlay>

							
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Enroll;
