import Avatar from "@mui/material/Avatar";

const AlumniProfile = ({ profile, profileImg, fullName }) => {
  const fullNameStyle = {
    fontSize: "22px",
  };
  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      // divider
    >
      <Avatar src={profileImg} sx={{ width: "100px", height: "100px" }} />
      <p style={fullNameStyle}>{fullName}</p>

      <div className="alumniTitle">
        <p class="profile-p">{profile.title}</p>
      </div>

      {profile.experiences.length > 0 && (
        <div className="experienceContainer">
          <p class="profile-p">
            <p className="profile-p profile-label">
              <b>Experience</b>
            </p>
          </p>
          {profile.experiences.map((exp) => {
            return (
              <p class="profile-p">
                <span className="experiences-role">
                  <b>{exp.role}</b>
                </span>
                <br />
                {exp.organization}
                <hr />
              </p>
            );
          })}
        </div>
      )}

      {profile.certifications.length > 0 && (
        <div className="certificationsContainer">
          <p class="profile-p">
            <p className="profile-p profile-label">
              <b>Certifications</b>
            </p>
          </p>
          <ul className="profile-p">
            {profile.certifications.map((certification) => {
              return <li>{certification}</li>;
            })}
          </ul>
        </div>
      )}

      <div class="skills experienceContainer">
        <p class="profile-p profile-label">
          <b>Skills</b>
        </p>
        <ul>
          {profile.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="urlContainer experienceContainer">
        <p class="profile-p">
          <b>Connect on Linkedln</b>
        </p>
        <p class="profile-p">http://Linkedln.com/priya-saw</p>
      </div>
    </div>
  );
};

export default AlumniProfile;
