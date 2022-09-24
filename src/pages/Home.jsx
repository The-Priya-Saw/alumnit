import "./css/Home.css";
import home_object_svg from "../images/home_object.svg";
import Navbar from  "../component/Navbar.jsx";
const Home = (props) => {
    return (
        <div className="Home">
            <section id="header">
                <Navbar/>
                <div>
                    <p id="quote">
                        Let's <br/>Connect <br/>And
                        Grow
                    </p>
                    <img src={home_object_svg} alt="" srcset="" />
                </div>
                
            </section>
            <section id="welcome"></section>
            <section id="depart_faculty"></section>
            <section id="footer"></section>

        </div>
    );
}

export default Home;