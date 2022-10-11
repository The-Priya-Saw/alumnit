import Navbar from "../component/Navbar";
import "./Login.css";
import logo from "../images/alumnit_logo.svg"
import { useContext } from "react";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";
// import {Redirect } from 'react-router-dom';

const Login = (props) => {
    const currentUser = useContext(CurrentUserContext);
    console.log(currentUser);
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        // Clear span errors
        const errorSpans = document.querySelectorAll(".error");
        errorSpans.forEach(x => x.innerHTML = "");

        const {Email, Password} = event.target;
        const loginResponse = await fetch("http://localhost:3001/login",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            credentials: 'include',

            body: JSON.stringify({
                Email: Email.value,
                Password: Password.value
            })
        });        
        if(loginResponse.status === 200){
            const ResJson = await loginResponse.json();
            console.log(ResJson);
            currentUser.setState(ResJson);
            window.location = "/community";
        }else{
            const resJson = await loginResponse.json();
            for (var error in resJson.error) {
                const span = document.querySelector(`.${error}.error`);
                span.innerHTML = resJson.error[error];
            }
            // alert(ResJson.error);
            console.log(resJson);
        }
    }

    return <div className="Login">
        <Navbar isTransperent={true} isShadowNavbar={true}/>
        <div className="login_container">
            <form onSubmit={handleOnSubmit}>
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="login_title">
                    <h1>Login</h1>
                </div>
                <div>
                    <input className="input-element" name="Email" type={"email"} placeholder="Enter Your Email" />
                    <span className="error Email"></span>
                </div>
                <div>
                    <input className="input-element" name="Password" type={"password"} placeholder="Enter Your Password" />
                    <span className="error Password"></span>
                </div>                <button type="submit" className="btnLogin">Login</button>
                <div className="redirect-links">
                        <div>
                            <span>No Account? <a href="Register">Create One</a></span>
                        </div>
                        <div>
                            <span><a href="#">Forget Password</a></span>
                        </div>
                </div>
            </form>

        </div>  
    </div>
}
export default Login;