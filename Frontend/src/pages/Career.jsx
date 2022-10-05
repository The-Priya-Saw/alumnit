import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
import JobCard from "../component/JobCard.jsx";
import CustomPostForm from "../component/CareerPostForm.jsx";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

const array = Array.from(Array(10).keys());

const Career = () => {
    const [posts, updatePosts] = useState([]);
    const [updateCount, setUpdateCount] = useState(0);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:3001/careers/all");
            const postsJson = await response.json();
            updatePosts(postsJson);
        }
        fetchPosts();
    },[updateCount]);
    return ( 
        <div className="Commnunity">
            <Navbar/>
            <div class="bg"></div>
            <div class="bg bg2"></div>
                    <div class="bg bg3"></div>
            <div class="content">
                <div className="job-post-heading">
                    <h1>Career</h1>
                    <Popup trigger={<button type="input" id="btn-job-post"> Post Job / Internships</button>} modal>
                        {/* <CustomPostForm updatePage={setUpdateCount}/> */}
                        {
                            close => <CustomPostForm close={close} updatePage={setUpdateCount}/>
                            
                        }
                    </Popup>
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
        </div>
    );
}
    export default Career;