import bvp_logo from "../images/bvp_logo.png";
import "./Navbar.css";
const Navbar = (props) => {

return(
    <nav class="navbar">
     <div className="brandLogo">
      <img className="bvp_logo" src={bvp_logo}/>
     </div>
     <div className="links">
      <a href="">Home</a>
      <a href="community.html">Community</a>
      <a href="">Events</a>
      <a href="">Career</a>
      <a href="">Login</a>
     </div>
   </nav>
); 
}
export default Navbar;