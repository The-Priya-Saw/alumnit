import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from "../component/Navbar.jsx";
import PostCard from "../component/PostCard";
import CommunityPostButton from "../component/CommunityPostButton";
import UserProfile from "../component/UserProfle";
import "./Community.css"
import { useState, useContext, useEffect } from "react";
import Popup from "reactjs-popup";
import ProfileEditForm from "../component/ProfileEditForm";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";
import CommunityPostsContext from "../context/CommunityPost/CommunityPostsContext";


const Community = (props) => {
    const currentUser = useContext(CurrentUserContext);
    // const [postArray, setPostArray] = useState([]);
    const {CommunityPostList, updateCommunityPostList} = useContext(CommunityPostsContext);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const postsResponse = await fetch("http://localhost:3001/community/getAllPosts", {
                method: "GET",
                credentials: "include"
            });
            if(postsResponse.status === 200){
                const resJson = await postsResponse.json();
                console.log(resJson);
                updateCommunityPostList(resJson);
                console.log("Post Array:",CommunityPostList);
            }
            
        };
        fetchPosts();
    },[]);

    return (
        <div className="Community">
            <Navbar shadowNavbar={true} />

        <div className="communityContainer">
            {false ? <div className="communityContainer">
                <div className="communityProfileContainer">
                    <div className="Profile">
                        <div class="container">
                            <div class="card">
                                {/* <img src={ currentUser.state.User && currentUser.state.User.ProfilePicture} alt="Person" class="card__image" />
                                <p class="card__name">{currentUser.state.User && currentUser.state.User.FullName}</p> */}
                                <div class="grid-container">

                                </div>
                                <ul class="social-icons">
                                   
                                    <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i class="bi bi-github"></i></a></li>
                                </ul>

                                <div className="editProfile">

                                    <Popup trigger={<button type="input" id="btn-edit-profile"> Edit</button>} modal>



                                        {
                                            close => <ProfileEditForm close={close}/>

                                        }
                                    </Popup>

                                </div>


                            </div>


                        </div>





                    </div>
                </div>
                </div> : ""}
            <div className="communityPostContainer">
                {
                    currentUser.state ? <CommunityPostButton ProfilePicture={currentUser.state.User.ProfilePicture}/> : <h4>Login To Post</h4>
                }
                
            {
                CommunityPostList.map(post => 
                    <PostCard
                        profileImage={post.ProfilePicture}
                        username={post.Username}
                        description={post.TextContent}
                        postImage={post.ImageContent}
                    />
                )
            }
            </div>
        </div>

        </div>

    );
}

export default Community;