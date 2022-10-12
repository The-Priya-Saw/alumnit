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


function EventCard(props) {
  const date = new Date(props.Date); 
  return (
    <Card className="EventCard" style={{ width: '100%' }}>
        <Card.Img variant="top" className="eventThumbnail" src={props.EventImage} />
        <div className="eventContent">
            <Card.Header className="eventName ">{props.EventName}</Card.Header>
            <Card.Body>
            <Card.Title className="eventDate eventTimes">{date.toDateString() + " , " + date.toLocaleTimeString()}</Card.Title>
            <Card.Title className="location">{props.Location}</Card.Title>
            <Card.Text className="description">
                {props.Description}
            </Card.Text>
            <Button className="btnEventCardAction py-2" variant="primary"> <a href={props.ApplyUrl}>Apply</a> </Button>
        </Card.Body>
        </div>


    </Card>
  );
}

export default EventCard;