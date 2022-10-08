import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
import JobCard from "../component/JobCard.jsx";
import CustomPostForm from "../component/CareerPostForm.jsx";
import Footer from "../component/Footer.jsx";

import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

const array = Array.from(Array(10).keys());

const Career = () => {
    const [posts, updatePosts] = useState([]);
    const [updateCount, setUpdateCount] = useState(0);
    const [isAuthenticated,setAuthenticated] = useState(false);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:3001/careers/all",{
                method: "GET",
                credentials: "include"
            });
            const postsJson = await response.json();
            updatePosts(postsJson);
        }
        const authenticate = async () => {
            const response = await fetch("http://localhost:3001/checkUser",{
                method: "GET",
                credentials: "include"
            });
            const json = await response.json();
            console.log(json);
            if(response.status === 200){
                setAuthenticated(true);
            }
        }
        authenticate();
        fetchPosts();
    },[updateCount]);

    const redirectToLogin = () => {
        window.location = "/login";
    }
    return ( 
        <div className="Career">
            <Navbar shadowNavbar={true}/>
            <div class="bg"></div>
            <div class="bg bg2"></div>
                    <div class="bg bg3"></div>
            <div class="content">
                <div className="job-post-heading">
                    <h1>Career</h1>
                    {
                        isAuthenticated ?
                        <Popup trigger={<button type="input" id="btn-job-post"> Post Job / Internships</button>} modal>
                            {/* <CustomPostForm updatePage={setUpdateCount}/> */}
                            {
                                close => <CustomPostForm close={close} updatePage={setUpdateCount}/>
                                
                            }
                        </Popup>
                        : <button type="input" onClick={redirectToLogin}  id="btn-job-post"> Post Job / Internships</button>
                    }
                </div>
                <div className="divider"></div>
                <div className="job-card-container">

                {posts.reverse().map(post =>                     
                    <JobCard 
                        JobTitle={post.Title}
                        Salary={"₹" + post.Salary}
                        Eligibility={post.Eligibility}
                        Link={post.ApplyLink}
                        CompanyName={post.CompanyName}
                        Location={post.Location}
                    />)
                }

                </div>
           
            </div>
            <Footer/>
        </div>
    );
}
    export default Career;