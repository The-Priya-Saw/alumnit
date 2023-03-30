import "./AlumniCard.css";
import Avatar from "@mui/material/Avatar";

const AlumniCard = ({ profile }) => {
  console.log(profile);
  return (
    <>
      <div class="AlumniCard card-container">
        <div className="profile-data">
          <div>
            <Avatar
              className="avatar"
              src={
                "https://www.linkedin.com/in/lokesh-patil-77221a24a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD2c0MYBpPjhurUUxJK3LbPZW122sXfV6k4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnxMf31J4QFqNgmcZmN2ahw%3D%3D"
              }
              sx={{ width: "100px", height: "100px" }}
            />
          </div>
          <div>
            <h3>{profile.fullName}</h3>

            <p>{profile.title}</p>
            <div class="buttons">
              <a href={`/viewProfile/${profile.id}`} className="primary">
                {" "}
                View Profile
              </a>
            </div>
          </div>
        </div>
        <div class="card-skills">
          <h6>Skills</h6>
          <ul>
            {profile.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default AlumniCard;
