import bvp_logo from "../images/bvp_logo.png";
import "./Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';



// const locations = [
//   {
//     label: 'New York',
//     value: 'newYork',
//   },
//   {
//     label: 'Oslo',
//     value: 'oslo',
//   },
//   {
//     label: 'Istanbul',
//     value: 'istanbul',
//   }
// ];


const Navbar = (props) => {
return(
    <nav class="navbar">
     <div className="brandLogo">
      <img className="bvp_logo" src={bvp_logo}/>
     </div>
     <div className={"links " + (props.isTransperent ?  "transperent" : "non-transperent")} >
      <a href="/">Home</a>
      {
        props.isAdmin ? <a href="/admin/inviteAlumni">Invite Alumni</a> : null
      }
      <a href="/community">Community</a>
      <a href="/event">Events</a>
      <a href="/career">Career</a>
      {
        props.isLogin ? <a href="/">Log out</a> : <a href="login">Login</a>
      }
      {/* <a href="login">{props.isLogin ? "Logout" : "Login"}</a> */}

        {/* <Dropdown
          name="location"
          title="Select location"
          list={locations}

        /> */}

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
           Admin
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/admin/invitealumni">Invite Alumni</Dropdown.Item>
            <Dropdown.Item href="#/action-2">View Users</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      </div>
    </nav>
  );
}
export default Navbar;