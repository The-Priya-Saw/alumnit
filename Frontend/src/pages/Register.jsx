import Navbar from "../component/Navbar";
import "./Login.css";
import logo from "../images/alumnit_logo.svg";

const Register = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { 
            FullName, 
            JobTitle, 
            PassingYear, 
            Email, 
            ProfilePicture, 
            Password 
        } = event.target;

        const response = await fetch("http://localhost:3001/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ 
                FullName: FullName.value, 
                JobTitle: JobTitle.value, 
                PassingYear: PassingYear.value, 
                Email: Email.value, 
                ProfilePicture: ProfilePicture.value, 
                Password: Password.value
            })
        });

        if(response.status === 200 ){
            const resJson = await response.json();
            alert("Successfully Registered");
            console.log("Response: " + resJson);

        }else{
            const resJson = await response.json();

            alert(resJson.error);
        }

    }

    return <div className="Login">
        <Navbar isTransperent={true} />
        <div className="login_container">
            <form onSubmit={handleSubmit}>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="login_title">
                    <h1>Register</h1>
                </div>
                <input className="input-element" name="FullName" type={"text"} placeholder="Full Name" />
                <input className="input-element" name="JobTitle" type={"text"} placeholder="Title" />
                <input className="input-element" name="Email" type={"email"} placeholder="Enter Your Email" />
                <input className="input-element" name="PassingYear" type={"number"} placeholder="Graduation Year" />
                <input className="input-element" name="Password" type={"password"} placeholder="Enter Your Password" />
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
export default Register;