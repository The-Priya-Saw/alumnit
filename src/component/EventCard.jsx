// const EventCard = (props) => {
//     return <div className="EventCard">
//         <div className="eventThumbnail">
//             <img src="https://picsum.photos/536/354"/>
//         </div>
//         <div className="eventContent">
//             <h3 className="eventName">Event Name</h3>
//             <p className="eventDate">Date</p>
//             <p className="eventTime">Time</p>
//             <p className="location">Location</p>
//             <p className="description">Description</p>
//         </div>
//     </div>
    
// }

// export default EventCard;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./EventCard.css";


function EventCard() {
  return (
    <Card className="EventCard" style={{ width: '100%' }}>
        <Card.Img variant="top" className="eventThumbnail" src="https://picsum.photos/536/354" />
        <div className="eventContent">
            <Card.Header>Event</Card.Header>
            <Card.Body>
            <Card.Title>Date, Time</Card.Title>
            <Card.Title>Location</Card.Title>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </div>


    </Card>
  );
}

export default EventCard;