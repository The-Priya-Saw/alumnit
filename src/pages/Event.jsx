import Navbar from  "../component/Navbar.jsx";
import EventCard from "../component/EventCard.jsx";
import "./Event.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const array = Array.from(Array(10).keys());

const Event =(props) => {

    return( 
     <div className="Event">
        <Navbar/>
        <div className="EventContainer">
            <div className="eventCategories">
                <h1>Event Categories</h1>
                <div className="categoriesContainer">
                <div className="category">
                        All Events
                    </div>
                    <div className="category">
                        Upcoming Events
                    </div>
                    <div className="category">
                        Past Events
                    </div>
                </div>
            </div>
            <div className="eventPosts">
                {
                    array.map(x => {
                        return <EventCard/>
                    })
                }
                
            </div>
        </div>
        
        
     </div>

    );
}

export default Event;

