import "./JobCard.css";

const JobCard = (props) => {
    return(
        <div className="JobCard">
            <h3 className="JobTitle">{props.JobTitle}</h3>
            <p>{props.CompanyName}, {props.Location} </p>
            <p>Salary: {props.Salary}</p>
            <p>Eligibility: {props.Eligibility}</p>
            <a href={props.Link}> Apply Now</a>
            
        </div>
       


    );

}

export default JobCard;