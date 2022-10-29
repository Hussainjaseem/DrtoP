import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Accord from '../accord/Accord'
import Card from 'react-bootstrap/Card'
import doc from './doc.png';


function Para() {
  return (
    <div>
        <Container fluid className="justify-content-center  text-white " style={{backgroundColor:'darkblue' }}  >
          <Row>
            <Col className="col-lg-6 p-lg-5 p-5" >
              <div style={{ width: '28rem' }} >
                <h1 className="text-center" >About DrtoP</h1>
                <p className="mb-2 paragraph-styled  justify-content-center  h6  ">
                  DrtoP (Doctor to Patient) is an exclusive and extremely secure video consultation
                  platform that  connects   hospitals  and doctors with patients online from the comfort of
                  their homes.This means that you can consult your doctor anytime, anywhere from a
                  location convenient for you at your preferred time. You neither have to depend on a
                  third party nor have to travel long distances to visit your doctor. All you need is a
                  steady internet connection, and at the click of a button you will be consulted,
                  diagnosed and your treatment will commence by a doctor of your choice
                </p>
                <p className="mb-2 paragraph-styled  justify-content-center  h6 ">
                  With the advancement in science and technology the benefit of such services is that even
                  patients in remote areas can consult doctors with minimum effort and travel. This
                  service is brought to you by <span className="fw-bold mb-2 paragraph-styled  justify-content-center align-items-center h6 ">Tertiary Care Pvt. Ltd.</span>	</p>
                  <Accord/>

              </div>




            </Col>
            <Col className="col-lg-6 p-lg-5">
            <Card className="p-5 " style={{ width: '38rem' ,backgroundColor:'darkblue',borderColor:'darkblue'}}>
      <Card.Img   src={doc} style={{height:'18rem'}} />
      
    </Card>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Para