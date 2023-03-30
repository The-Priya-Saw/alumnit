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
    ],
    skills: [
      "Python(ProgrammingLanguage)",
      "HTML",
      "CascadingStyleSheets(CSS)",
      "HTML5",
      "Bootstrap",
    ],
    education: [],
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
  });

  return (
    <div className="viewProfilePage">
      <Navbar shadowNavbar={false} />
      <div className="viewProfile">
        <div className="profile">
          <ProfilePictureWithName profileImg={profile.profileImg} fullName={profile.fullName} />
        </div>
        <div className="recommendedProfiles">a</div>
      </div>
    </div>
  );
};

const ProfilePictureWithName = ({ profileImg, fullName }) => {
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
    </div>
  );
};

export default ViewProfile;
