import Navbar from "../component/Navbar.jsx";
import EventCard from "../component/EventCard.jsx";
import "./Event.css";
import { useState, useEffect,useContext } from "react";
import Popup from "reactjs-popup";
import EventPostForm from "../component/EventPostForm.jsx";
import Footer from "../component/Footer.jsx";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";

const loggedInUser = {name:"Admin", role:""};

const array = Array.from(Array(0).keys());
// array = []


const Event = (props) => {
    const [eventPosts, updateEventPosts] = useState([]);
    const [category, setCategory] = useState("all");
    const currentUser = useContext(CurrentUserContext);
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch("http://localhost:3001/events/" + category);
            const eventPostsJson = await response.json();
            updateEventPosts(eventPostsJson);
        }
        fetchEvents();
        console.log(currentUser);

    }, [category]);

    const handleCategoryClick = (e) => {
        const target = e.target;
        const buttons = document.querySelectorAll(".eventCategories button");
        buttons.forEach(button => button.classList.remove("selected"));
        target.classList.add("selected");
        setCategory(target.getAttribute("tag"));
    }


    return (
        <div className="Event">
            <Navbar shadowNavbar={true}/>
            <div className="EventContainer">
                <div className="eventCategories">
                    <h1>Event Categories</h1>
                    <div className="categoriesContainer">
                        <button tag="all" id="AllEvents" onClick={handleCategoryClick} className="category selected">
                            All Events
                        </button>
                        <button tag="upcoming" id="UpcomingEvents" onClick={handleCategoryClick} className="category">
                            Upcoming Events
                        </button>
                        <button tag="past" id="PastEvents" onClick={handleCategoryClick} className="category">
                            Past Events
                        </button>
                    </div>
                    <div className="Event-post">
                    {
                        currentUser && currentUser.state && currentUser.state.User.isAdmin ? 
                        <Popup trigger={<button type="input" id="btn-event-post"> Post Event</button>} modal>
                            {
                                close => <EventPostForm close={close} />
                            }
                        </Popup>
                        : null
                    }
                    </div>



                </div>
                <div className="eventPosts">
                    {
                        eventPosts.map(eventPost => {
                            return <EventCard
                                key={eventPost["_id"]}
                                EventName={eventPost.EventName}
                                EventImage={eventPost.EventImage}
                                Date={eventPost.Date}
                                Location={eventPost.Location}
                                Description={eventPost.Description}
                                ApplyUrl={eventPost.ApplyUrl}
                            />
                        })
                    }

                </div>
            </div>
            <Footer></Footer>

        </div>

    );
}

export default Event;

