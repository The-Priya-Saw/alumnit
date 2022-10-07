import "./Card.css";
const Card = (props) => {
  return (
    // <div className="Card">
    //   <img className="img" src={props.img} />
    //   <span className="facultyName">{props.facultyName}</span>
    //   <p className="jobTitle">{props.jobTitle}</p>
    // </div>
    <div>
      <div class="card1">
        <img src={props.img} alt="none"/>
        <div class="descriptions">
          <h1>{props.EventName}</h1>
          <h5> {props.Date} </h5>
          <h5> {props.Location} </h5>
          <a href="/event">View more </a>

        </div>
      </div>
      <div class="youtubeBtn">
{/* 
        <a target="_blank" href="">
          <span>View more</span>
          <i class="fab fa-youtube"></i>
        </a> */}

      </div>
    </div>










  );
};

export default Card;



