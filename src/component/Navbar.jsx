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
      {
        props.isAdmin ? <a href="/admin/inviteAlumni">Invite Alumni</a> : null
      }
      <a href="community">Community</a>
      <a href="event">Events</a>
      <a href="career">Career</a>
      {
        props.isLogin ? <a href="/">Log out</a> : <a href="login">Login</a>
      }
      {/* <a href="login">{props.isLogin ? "Logout" : "Login"}</a> */}

     </div>
   </nav>
); 
}
export default Navbar;