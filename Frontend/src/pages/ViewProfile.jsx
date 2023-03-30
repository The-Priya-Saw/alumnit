import Navbar from "../component/Navbar";
import AlumniProfile from "../component/ViewProfile/AlumniProfile";
import Avatar from "@mui/material/Avatar";

import "./ViewProfile.css";
import { width } from "@mui/system";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProfile = (props) => {
  // const { id } = useParams();
  const id = "63f1fbc8bef0afbb69a345e9";
  const [recommendedProfiles, setRecommendedProfiles] = useState([]);
  const profile = {
    id: "63f1e38f0666421fed18d222",
    profileImg:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullName: "Lokesh Patil",
    title: "It Student",
    experiences: [
      {
        organization: "TataConsultancyServices",
        role: "AssistantSystemEngineer",
      },
      {
        organization: "TataConsultancyServices",
        role: "AssistantSystemEngineer",
      },
    ],
    skills: [
      "Python(ProgrammingLanguage)",
      "HTML",
      "CascadingStyleSheets(CSS)",
      "HTML5",
      "Bootstrap",
    ],
    education: [],
    certifications: ["SalesforceCertifiedPlatformDeveloperI", "GestureControlledRobot"],
  };

  useEffect(() => {
    const recommend = async () => {
      const response = await fetch(`http://127.0.0.1:5000/get/${id}`);
      const resJson = await response.json();
      resJson.forEach((userProfile) => {
        let experiences = [];
        for (let i = 0; i < userProfile.experiences.length / 2; i += 2) {
          experiences.push({
            org: userProfile.experiences[i],
            role: userProfile.experiences[i + 1],
          });
        }
        const profile = {
          id: userProfile._id,
          profileImg:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
          fullName: userProfile.fullName,
          title: userProfile.title[0],
          skills: userProfile.skills,
          certifications: userProfile.certifications,
          experiences: experiences,
        };
        recommendedProfiles.push(profile);
      });
      console.log(recommendedProfiles);
    };
    recommend();
  }, []);

  return (
    <div className="viewProfilePage">
      <Navbar shadowNavbar={false} />
      <div className="viewProfile">
        <div className="profile">
          <ProfilePictureWithName
            profile={profile}
            profileImg={profile.profileImg}
            fullName={profile.fullName}
          />
        </div>
        <div className="recommendedProfiles">a</div>
      </div>
    </div>
  );
};

const ProfilePictureWithName = ({ profile, profileImg, fullName }) => {
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
      {/* <div className="EducationContainer experienceContainer">
        <p class="profile-p profile-label">
          <b>Education</b>
        </p>
        <p class="profile-p">IT Engineering</p>
        <p class="profile-p">Bharati Vidyapeeth college of engineering</p>
      </div> */}

      <div class="skills experienceContainer">
        <p class="profile-p profile-label">
          <b>Skills</b>
        </p>
        <ul>
          {/* <li>UI/UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Angular</li> */}
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

export default ViewProfile;
