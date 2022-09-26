import "./EventCard.css";
const EventCard = (props) => {
    return <div className="EventCard">
        <div className="eventThumbnail">
            <img src="https://picsum.photos/536/354"/>
        </div>
        <div className="eventContent">
            <h3 className="eventName">Event Name</h3>
            <p className="eventDate">Date</p>
            <p className="eventTime">Time</p>
            <p className="location">Location</p>
            <p className="description">Description</p>
        </div>
    </div>
}

export default EventCard;