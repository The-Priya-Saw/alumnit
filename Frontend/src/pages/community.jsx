import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from "../component/Navbar.jsx";
import PostCard from "../component/PostCard";
import CommunityPostButton from "../component/CommunityPostButton";
import UserProfile from "../component/UserProfle";
import "./Community.css"
import { useState } from "react";
import Popup from "reactjs-popup";
import ProfileEditForm from "../component/ProfileEditForm";

const json = [
    {
        profileImage: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png",
        username: "priya_saw",
        description: "my name is priya.i m currently pursuing bachelors in information technology engineering"
    },
    {
        profileImage: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png",
        username: "Bonnie Bennete",
        postImage: "https://cdn3.whatculture.com/images/2021/03/6ce0d7c07eaff9ab-600x338.jpg",
        description: "my name is priya.i m currently pursuing bachelors in information technology engineering"
    },
]

const Community = (props) => {
    const [postArray, setPostArray] = useState([json[0]]);
    const addPost = (post) => {
        setPostArray();
    }
    return (
        <div className="Community">
            <Navbar shadowNavbar={true} />

            <div className="communityContainer">
                <div className="communityProfileContainer">
                    <div className="Profile">
                        <div class="container">
                            <div class="card">
                                <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image" />
                                <p class="card__name">Priya saw</p>
                                <div class="grid-container">

                                </div>
                                <ul class="social-icons">
                                   
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-github"></i></a></li>
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
                <div className="communityPostContainer">
                    <CommunityPostButton />
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