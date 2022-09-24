import bvp_logo from "../images/bvp_logo.png"
const Navbar = (props) => {

return(
    <nav class="navbar">
     <div className="brandLogo">
      <img className="bvp_logo" src={bvp_logo}/>
     </div>
     <div className="links">
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
     </div>
   </nav>
); 
}
export default Navbar;