import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log(),
  );

  return (
    <Button
      type="button"
      style={{backgroundColor:'darkblue',borderColor:'darkblue'}}
      className="justify-content-center align-items-center "
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function Accord() {
  return (
    <Accordion defaultActiveKey="0">
     
        
          
       
        <Accordion.Collapse  eventKey="0">
          
            <p className="mb-2 paragraph-styled d-flex justify-content-center align-items-center h6 " style={{backgroundColor:'darkblue'}}>medical practitioners get the advantage of being able to see their patients from their clinics, even if the patients cannot reach them. As for patients, DrtoP allows them to login to a virtual consultation room with their doctor, discuss health issues and take the treatment plan forward all smoothly and securely without having to wait in long queues. With DrtoP you can electronically store patient records that are easily accessible to the patients and the chosen doctor.</p>
            
        </Accordion.Collapse>
        <CustomToggle  eventKey="0">Read More</CustomToggle>
      
    </Accordion>
  );
}


export default Accord