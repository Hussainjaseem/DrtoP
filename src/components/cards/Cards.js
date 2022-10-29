import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import headache from './headache.png';
import toothache from './toothache.png';
import cold from './cold.png';
import neckpain from './neckpain.png';
import Button from 'react-bootstrap/esm/Button'

function Cards() {
  return (
    <div>
        
        <Container >
          <Row className="justify-content-bitween">
            <Col className="col-lg-3 col-md-6  p-5 ">
              <Card style={{ width: '10rem' }} >
                <Card.Img variant="top" src={headache} style={{ height: '10rem'}} />
                <Card.Body>
                  <Card.Title>Consultations with doctors & specialists</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-lg-3 col-md-6 p-5">
              <Card style={{ width: '10rem'  }} >
                <Card.Img variant="top" src={toothache} style={{ height: '10rem' }} />
                <Card.Body>
                  <Card.Title>Consult for any medical issues or support</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-lg-3 col-md-6 p-5">
              <Card style={{ width: '10rem' }} >
                <Card.Img variant="top" src={cold} style={{ height: '10rem' }} />
                <Card.Body>
                  <Card.Title>Consult across all areas of medicine</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-lg-3 col-md-6 p-5">
              <Card  style={{ width: '10rem' }} >
                <Card.Img variant="top" src={neckpain}  style={{ height: '10rem'  }} />
                <Card.Body>
                  <Card.Title>Consult when you need it the most & specialists</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Container className="text-center p-5">
            <Button className="btn btn-lg  hover-btn text-white" style={{color:'darkblue'}}>
              Book An Appoinment
            </Button>
          </Container>
        </Container>
    </div>
  )
}

export default Cards