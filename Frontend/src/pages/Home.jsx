
import Card from "../component/Card.jsx";
import Carousel from "react-elastic-carousel";
import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
import { useEffect, useState } from "react";
import Footer from "../component/Footer.jsx";
// import EventImage from "../images/EventImage.jpeg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
const Home = (props) => {
    const [eventPosts, setEventPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const eventResponse = await fetch("http://localhost:3001/events/upcoming");
            const resJson = await eventResponse.json()
            if(eventResponse.status === 200){
                setEventPosts(resJson);
                console.log(resJson)
            }else {
                alert(resJson.error);
            }
        }
        fetchData()
    },[]);
    return (
        <div className="Home">
            <section id="header">
                <Navbar isTransperent={true}/>
                <div id="header-content">
                    <p id="quote">
                        Let's <br/>Connect <br/>And
                        Grow
                    </p>
                    <img id="alumnit-logo" src={AlumnITLogo}/>
                </div>
            </section>
            <section id="welcome">
                <span className="section-heading">Welcome !</span>
                <div className="cardButtons">
                    <a href="/login">Login</a>
                    <span>|</span>
                    <a href="/register">Register</a>
                </div>
                <div className="welcome-content">
                    <p>Whether you’re looking to reconnect or grow your career, support <span className="text-primary">Bharati Vidpeeth’s</span> mission or learn about the impact of giving, you’ve come to the right place. we’ll show you how, where, and why. </p>
                    <p>If you’ve come <span className="text-primary">To connect</span>, we encourage you to check out communities, career offerings, and events. Take a look around and find the Bharati vidyapeeth that speaks to you.</p>
                    <hr/>
                </div>

            </section>
            <section id="department_faculty">
                <span className="section-heading">Upcoming Events</span>
                <Carousel className="carousel" breakPoints={breakPoints}>
                   {
                    eventPosts.map(card => <Card
                        img={card.EventImage}
                        EventName={card.EventName}
                        Description={card.Description}
                        Date={card.Date}
                        Location={card.Location}
                        />)
                   }
                   
                </Carousel>
            </section>

            <Footer/>
            

        </div>
    );
}

export default Home;