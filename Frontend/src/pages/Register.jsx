import Navbar from "../component/Navbar";
import "./Login.css";
import logo from "../images/alumnit_logo.svg";
import { useState } from "react";

const Register = (props) => {
    const [profilePicture, setProfilePicture] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Clear span errors
        const errorSpans = document.querySelectorAll(".error");
        errorSpans.forEach(x => x.innerHTML = "");

        const {
            FullName,
            JobTitle,
            PassingYear,
            Email,
            ProfilePicture,
            Password
        } = event.target;

        const data = new FormData();
        data.append("ProfilePicture", ProfilePicture.files[0]);
        data.append("FullName", FullName.value);
        data.append("JobTitle", JobTitle.value);
        data.append("PassingYear", PassingYear.value);
        data.append("Email", Email.value);
        data.append("Password", Password.value);

        const response = await fetch("http://localhost:3001/register", {
            method: "POST",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({
            //     FullName: FullName.value,
            //     JobTitle: JobTitle.value,
            //     PassingYear: PassingYear.value,
            //     Email: Email.value,
            //     ProfilePicture: "",
            //     Password: Password.value
            // })
            credentials: 'include',
            body: data
        });

        if (response.status === 200) {
            const resJson = await response.json();
            alert("Successfully Registered");
            console.log("Response: ");
            console.log(resJson);

        } else {
            const resJson = await response.json();
            for (var error in resJson.error) {
                const span = document.querySelector(`.${error}.error`);
                span.innerHTML = resJson.error[error];
            }
            console.log(resJson.error);
        }

    }

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                setProfilePicture({ data: e.target.result, name: event.target.files[0].name });
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return <div className="Login">
        <Navbar isTransperent={true} isShadowNavbar={true}/>
        <div className="login_container">
            <form onSubmit={handleSubmit}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="login_title">
                    <h1>Register</h1>
                </div>
                <label className="lblUpload" for="inputImg">
                    <img src={profilePicture && profilePicture.data} className="imgProfile"></img>
                    <span id="selectedImage">{profilePicture ? profilePicture.name : "Select a profile picture"}</span>
                </label>
                <input onChange={handleImageChange} name="ProfilePicture" id="inputImg" className="inputImg" type={"file"}></input>
                <div>
                    <input className="input-element" name="FullName" type={"text"} placeholder="Full Name" />
                    <span className="error FullName"></span>
                </div>
                <div>
                    <input className="input-element" name="JobTitle" type={"text"} placeholder="Title" />
                    <span className="error JobTitle"></span>

                </div>
                <div>
                    <input className="input-element" name="Email" type={"email"} placeholder="Enter Your Email" />
                    <span className="error Email"></span>

                </div>
                <div>
                    <input className="input-element" name="PassingYear" type={"number"} placeholder="Graduation Year" />
                    <span className="error PassingYear"></span>

                </div>
                <div>
                    <input className="input-element" name="Password" type={"password"} placeholder="Enter Your Password" />
                    <span className="error Password"></span>

                </div>
                <button className="btnLogin">Register</button>
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