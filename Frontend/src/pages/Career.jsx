import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
import JobCard from "../component/JobCard.jsx";
import CustomPostForm from "../component/CareerPostForm.jsx";
import Popup from "reactjs-popup";


const array = Array.from(Array(10).keys());

const Career = () => {
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
                        <CustomPostForm />
                    </Popup>
                </div>
                <div className="divider"></div>
                <div className="job-card-container">

                {array.map(x =>                     <JobCard 
                        JobTitle="Software Engineer"
                        Salary="$100,000"
                        Eligibility="B.E./M.E./PG in Computer related field"
                        Link="https://bit.ly/3BXIrtK"
                        CompanyName="Google"
                        Location="USA"
                    />)}

                </div>
           
            </div>
        </div>
    );
}
    export default Career;