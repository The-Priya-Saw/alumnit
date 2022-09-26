import Navbar from  "../component/Navbar.jsx";
import EventCard from "../component/EventCard.jsx";
import "./Event.css";


const Event =(props) => {

    return( 
     <div className="Event">
        <Navbar/>
        <EventCard/>
     </div>

    );
}

export default Event;