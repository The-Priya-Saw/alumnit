import bvp_logo from "../images/bvp_logo.png";
import "./Navbar.css";
const Navbar = (props) => {

return(
    <nav class="navbar">
     <div className="brandLogo">
      <img className="bvp_logo" src={bvp_logo}/>
     </div>
     <div className="links">
      <a href="/">Home</a>
      <a href="community">Community</a>
      <a href="event">Events</a>
      <a href="carer">Career</a>
      <a href="login">Login</a>
     </div>
   </nav>
); 
}
export default Navbar;