import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
const Home = (props) => {
    return (
        <div className="Home">
            <section id="header">
                <Navbar/>
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
                </div>

            </section>
            <section id="department_faculty">
                <span className="section-heading">Department Faculty</span>
                
            </section>
            <section id="footer"></section>

        </div>
    );
}

export default Home;