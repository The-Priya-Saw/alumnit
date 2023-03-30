import Navbar from "../component/Navbar";

import "./ViewProfile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlumniProfile from "../component/ViewProfile/AlumniProfile";
import AlumniCard from "../component/AlumniCard/AlumniCard";

const ViewProfile = (props) => {
  const { id } = useParams();
  // const id = "63f1fbc8bef0afbb69a345e9";
  const [recommendedProfiles, setRecommendedProfiles] = useState([]);
  const [recommendedProfileCards, setRecommendedProfileCards] = useState([]);
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
      const response = await fetch(`http://127.0.0.1:5000/recommend/${id}`);
      const resJson = await response.json();
      let temp_recommendedProfiles = [];
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
            "https://www.linkedin.com/in/lokesh-patil-77221a24a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD2c0MYBpPjhurUUxJK3LbPZW122sXfV6k4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnxMf31J4QFqNgmcZmN2ahw%3D%3D",
          fullName: userProfile.fullName,
          title: userProfile.title,
          skills: userProfile.skills,
          certifications: userProfile.certifications,
          experiences: experiences,
        };
        temp_recommendedProfiles.push(profile);
        // recommendedProfileCards.push(<AlumniCard profile={profile} />);
      });
      setRecommendedProfiles(temp_recommendedProfiles);
    };
    //
    recommend();
  }, []);

  useEffect(() => {
    console.log(recommendedProfiles);
    console.warn("Value", recommendedProfiles[0]);
    const tags = recommendedProfiles.map((prof) => <AlumniCard profile={prof} />);
    tags.shift();
    setRecommendedProfileCards(tags);
  }, [recommendedProfiles]);

  return (
    <div className="viewProfilePage">
      <Navbar shadowNavbar={false} />
      <div className="viewProfile">
        <div className="profile">
          {recommendedProfiles[0] && (
            <AlumniProfile
              profile={recommendedProfiles[0]}
              profileImg={recommendedProfiles[0].profileImg}
              fullName={recommendedProfiles[0].fullName}
            />
          )}
        </div>
        <div className="recommendedProfiles">
          <center><h6>Suggestions  > </h6></center>
          {/* {recommendedProfiles.map((prof) => (
            <AlumniCard profile={prof} />
          ))} */}
          {recommendedProfileCards}
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
