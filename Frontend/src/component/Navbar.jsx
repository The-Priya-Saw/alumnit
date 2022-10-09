import bvp_logo from "../images/bvp_logo.png";
import "./Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(undefined);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  useEffect(() => {
    const checkUser = async () => {
      const userResponse = await fetch("http://localhost:3001/checkUser", {
        method: "GET",
        credentials: "include"
      });
      if (userResponse.status === 200) {
        const json = await userResponse.json();
        setLoggedInUser(json.User);
      } else {
        const json = await userResponse.json();
        setLoggedInUser(undefined);
      }
    }
    checkUser();
  }, []);

  const logout = async (event) => {
    const response = await fetch("http://localhost:3001/logout", { method: "GET", credentials: "include" });
    window.location.reload();
  }
  return (
    <nav class="navbar">
      <div className="brandLogo">
        <img className="bvp_logo" src={bvp_logo} />
      </div>
      <div className={"links " + (props.isTransperent ? "transperent" : "non-transperent")} >
        <a href="/">Home</a>
        {
          props.isAdmin ? <a href="/admin/inviteAlumni">Invite Alumni</a> : null
        }
        <a href="/community">Community</a>
        <a href="/event">Events</a>
        <a href="/career">Career</a>
        {
          loggedInUser && Object.keys(loggedInUser).length > 0 ? <a onClick={logout} id="logout">Log out</a> : <a href="login">Login</a>
        }
        {
          userIsAdmin &&
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
        }



      </div>
    </nav>
  );

}
export default Navbar;