import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
import JobCard from "../component/JobCard.jsx";
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
                    <button type="input" id="btn-job-post"> Post Job / Internships</button>
                </div>
                <div className="divider"></div>
                <div className="job-card-container">
                    <JobCard 
                        JobTitle="Software Engineer"
                        Salary="$100,000"
                        Eligibility="B.E./M.E./PG in Computer related field"
                        Link="https://bit.ly/3BXIrtK"
                        CompanyName="Google"
                        Location="USA"
                    />

                    <JobCard 
                        JobTitle="Software Engineer"
                        Salary="$100,000"
                        Eligibility="B.E./M.E./PG in Computer related field"
                        Link="https://bit.ly/3BXIrtK"
                        CompanyName="Google"
                        Location="USA"
                    />

<JobCard 
                        JobTitle="Software Engineer"
                        Salary="$100,000"
                        Eligibility="B.E./M.E./PG in Computer related field"
                        Link="https://bit.ly/3BXIrtK"
                        CompanyName="Google"
                        Location="USA"
                    />

<JobCard 
                        JobTitle="Software Engineer"
                        Salary="$100,000"
                        Eligibility="B.E./M.E./PG in Computer related field"
                        Link="https://bit.ly/3BXIrtK"
                        CompanyName="Google"
                        Location="USA"
                    />

<JobCard 
                        JobTitle="Software Engineer"
                        Salary="$100,000"
                        Eligibility="B.E./M.E./PG in Computer related field"
                        Link="https://bit.ly/3BXIrtK"
                        CompanyName="Google"
                        Location="USA"
                    />

<JobCard 
                        JobTitle="Software Engineer"
                        Salary="$100,000"
                        Eligibility="B.E./M.E./PG in Computer related field"
                        Link="https://bit.ly/3BXIrtK"
                        CompanyName="Google"
                        Location="USA"
                    />

                </div>
           
            </div>
        </div>
    );
}
    export default Career;