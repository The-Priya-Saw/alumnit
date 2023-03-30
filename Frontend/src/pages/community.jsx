import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from "../component/Navbar.jsx";
import PostCard from "../component/PostCard";
import CommunityPostButton from "../component/CommunityPostButton";
import UserProfile from "../component/UserProfle";
import "./Community.css";
import { useState, useContext, useEffect } from "react";
import Popup from "reactjs-popup";
import ProfileEditForm from "../component/ProfileEditForm";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";
import CommunityPostsContext from "../context/CommunityPost/CommunityPostsContext";
import MentorCard from "../component/MentorCard/MentorCard.jsx";

const Community = (props) => {
  const currentUser = useContext(CurrentUserContext);
  // const [postArray, setPostArray] = useState([]);
  const { CommunityPostList, updateCommunityPostList } = useContext(CommunityPostsContext);

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
    const fetchPosts = async () => {
      const postsResponse = await fetch("http://localhost:3001/community/getAllPosts", {
        method: "GET",
        credentials: "include",
      });
      if (postsResponse.status === 200) {
        const resJson = await postsResponse.json();
        console.log(resJson);
        updateCommunityPostList(resJson);
        console.log("Post Array:", CommunityPostList);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="Community">
      <Navbar shadowNavbar={true} />

      <div className="communityContainer">
        <div className="communityPostContainer">
          {currentUser.state ? (
            <CommunityPostButton ProfilePicture={currentUser.state.User.ProfilePicture} />
          ) : (
            <h4>Login To Post</h4>
          )}

          {CommunityPostList.map((post) => (
            <PostCard
              profileImage={post.ProfilePicture}
              username={post.Username}
              description={post.TextContent}
              postImage={post.ImageContent}
            />
          ))}
        </div>
        <div className="alumniProfileContainer">
          <center>
            <h2>Find Your Mentor</h2>
          </center>
          <div className="flex-container">
            {[1, 2, 3, 4, 5, 6, 8, 9, 0, 0, 0, 0].map((e) => (
              <MentorCard profile={profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
