import Navbar from "../component/Navbar";
import "./Login.css";
import logo from "../images/alumnit_logo.svg"
const Login = (props) => {
    return <div className="Login">
        <Navbar isTransperent={true}/>
        <div className="login_container">
            <form>
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="login_title">
                    <h1>Register</h1>
                </div>
                <input className="input-element" type={"text"} placeholder="Full Name" />
                <input className="input-element" type={"text"} placeholder="Title" />
                <input className="input-element" type={"email"} placeholder="Enter Your Email" />
                <input className="input-element" type={"number"} placeholder="Graduation Year" />
                <input className="input-element" type={"password"} placeholder="Enter Your Password" />
                <button className="btnLogin">Login</button>
                <div className="redirect-links">
                        <div>
                            <span>Already Have an Account? <a href="login">Login</a></span>
                        </div>
                </div>
            </form>

        </div>  
    </div>
}
export default Login;