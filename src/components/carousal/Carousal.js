import React from 'react'
import drr from './drr.jpg';
import  Carousel  from 'react-bootstrap/Carousel'
import Container  from 'react-bootstrap/Container'
import  Button  from 'react-bootstrap/Button'
function Carousal() {
  return (
    <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={drr} alt="First slide" />
            <Carousel.Caption className="text-start">
              <h1 className="fw-bolder caption-font-style">
                SET UP YOUR ONLINE<br /> CLINIC<br /> FOR FREE! <br />IN 10 MINUTES
              </h1>
              <Button className="btn btn-lg btn-primary bg-colour-blue hover-blue-btn">Enroll Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={drr} alt="First slide" />
            <Carousel.Caption className="text-start">
              <h1 className="fw-bolder caption-font-style">
                CONSULT YOUR DOCTER <br /> ANY TIME<br /> ANY WHERE 
              </h1>
              <Button className="btn btn-lg btn-primary bg-colour-blue hover-blue-btn">Enroll Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={drr} alt="First slide" />
            <Carousel.Caption className="text-start">
              <h1 className="fw-bolder caption-font-style">
               CONSULT ANY DOCTER<br /> ACROSS<br /> ALL SPECIALITIES 
              </h1>
              <Button className="btn btn-lg btn-primary bg-colour-blue hover-blue-btn">Enroll Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className="p-2">
          <h4 className="text-center mt-3 mt-md-3 mt-lg-4 fw-bold text-blue">Wave Goodbye to Waiting Rooms</h4>
        </Container>


    </div>
  )
}

export default Carousal