import "./MentorCard.css";
import Avatar from "@mui/material/Avatar";

const MentorCard = ({ profile }) => {
  console.log(profile);
  const handleClick = () => {
    window.location.href = `/viewProfile/${profile.id}`;
  };
  return (
    <div class="MentorCard card-container">
      <Avatar
        className="avatar"
        src={
          "https://www.linkedin.com/in/lokesh-patil-77221a24a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD2c0MYBpPjhurUUxJK3LbPZW122sXfV6k4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnxMf31J4QFqNgmcZmN2ahw%3D%3D"
        }
        sx={{ width: "75px", height: "75px" }}
      />
      <h4>{profile.fullName}</h4>
      <p>{profile.title}</p>
      {/* <h6>Tata Consultancy Services</h6> */}
      <div class="buttons">
        <button onClick={handleClick} class="primary">
          View Profile
        </button>
      </div>
    </div>
  );
};
export default MentorCard;
