import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import easy from './easy.png';
import helpdesk from './helpdesk.png';
import timetable from './timetable.png';
import time from './time.png';
import live from './time.png';
import cost from './cost.png';
import ehr from './ehr.png';

function Pic() {
	return (
		<div>
			<Container fluid >
				<h2 className="text-center  h2 bold p-4" style={{color:'darkblue'}}>Features</h2>
				<CardGroup className="content-center">
					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={easy} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center border:white">
								The platform can be easily accessed through either a mobile or a desktop.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={helpdesk} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center">
							24x7 help desk with video conferencing to attend your queries.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={timetable} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center">
							Dynamic appointment scheduling directly from your mobile or with the assistance of our helpdesk team.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={time} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center border:white">
							No waiting time. The doctor will call you directly on your mobile phone at the time of the appointment.
							</Card.Text>
						</Card.Body>
					</Card>

				</CardGroup>
				<CardGroup>
					
					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={live} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center">
							Facility to re-schedule or cancel appointments any time before the start of a consultation block.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={timetable} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center">
							Spot booking facility available for emergencies. Conditions apply.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={ehr} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center">
							Option to electronically store patient files that are easily accessible to the patients and the chosen doctor.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="justify-content-center align-items-center border-white">
						<Card.Img style={{ height: '150px', width: '150px' }} variant="top" src={cost} />
						<Card.Body>
							<Card.Text style={{ width: '200px' }} className=" text-center">
							Highly cost-effective. A cost efficient method for doctors to have their own unique telemedicine platforms.
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>
		</div>
	);
}

export default Pic;
