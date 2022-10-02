import "./Card.css";
const Card = (props) => {
  return (
    <div className="Card">
      <img className="img" src={props.img} />
      <span className="facultyName">{props.facultyName}</span>
      <p className="jobTitle">{props.jobTitle}</p>
    </div>
  );
};

export default Card;
