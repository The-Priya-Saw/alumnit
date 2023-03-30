import "./AlumniProfile.css";

const EducationItem = (props) => {
  const education = props.education;
  return (
    <div className="EducationItem">
      <div className="CollegeName">
        <strong>College Name: </strong>
        <span>{education.title}</span>
      </div>
      <div className="Course">
        <strong>Course: </strong>
        <span>{education.degree}</span>
      </div>
      <div className="PassingYear">
        <strong>Passing Year: </strong>
        <span>{education.date}</span>
      </div>
    </div>
  );
};

const AlumniProfile = (props) => {
  let profile = props.profile;
  let education = profile.education;
  return (
    <div className="AlumniProfile">
      <div id="personalDetails">
        <div>
          <div id="fullName">
            <img src={profile.profileImg}></img>
            {profile.fullName}
          </div>
          <div id="title">
            <strong>Title:</strong> {profile.title}
          </div>
          <div id="location">
            <strong>Location:</strong> {profile.location}
          </div>
        </div>
      </div>

      {/* <div id="education">
                <h3>Education</h3>
        </div>
        {
            education.map(item => 
                <EducationItem 
                    education={item}
                />
            )
        } */}
    </div>
  );
};

export default AlumniProfile;
