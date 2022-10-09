import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
import PostCard from "../component/PostCard";
import CommunityPostButton from "../component/CommunityPostButton";
import UserProfile from "../component/UserProfle";
import "./Community.css"
import { useState, useContext } from "react";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";

const json = [
    {
        profileImage: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png",
        username: "priya_saw",
        description:"my name is priya.i m currently pursuing bachelors in information technology engineering"
    },
    {
        profileImage: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png",
        username: "Bonnie Bennete",
        postImage:"https://cdn3.whatculture.com/images/2021/03/6ce0d7c07eaff9ab-600x338.jpg",
        description:"my name is priya.i m currently pursuing bachelors in information technology engineering"
    }, 
]

const Community =(props) =>{
    const currentUser = useContext(CurrentUserContext);
    const [postArray,setPostArray] = useState([json[0]]);
    const addPost = (post) => {
        setPostArray();
    }
    return( 
        <div className="Community"> 
        <Navbar shadowNavbar={true}/>

        <div className="communityContainer">
            <div className="communityPostContainer">
                {
                    currentUser.state ? <CommunityPostButton ProfilePicture={currentUser.state.User.ProfilePicture}/> : <h4>Login To Post</h4>
                }
                
            {
                json.map(post => 
                    <PostCard
                        profileImage={post.profileImage}
                        username={post.username}
                        description={post.description}
                        postImage={post.postImage}
                    />
                )
            }
            </div>
        </div>

       </div>
    );
}

export default Community;