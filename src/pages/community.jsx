import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";
import PostCard from "../component/PostCard";
import CommunityPostButton from "../component/CommunityPostButton";
import { useState } from "react";

const json = [
    {
        profileImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-518361844-1551386275.jpg?crop=0.671xw:1.00xh;0.305xw,0&resize=640:*",
        username: "priya_saw",
        description:"my name is priya.i m currently pursuing bachelors in information technology engineering"
    },
    {
        profileImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-518361844-1551386275.jpg?crop=0.671xw:1.00xh;0.305xw,0&resize=640:*",
        username: "angelpriya",
        postImage:"https://i.ytimg.com/vi/Xte4qGCJLN4/maxresdefault.jpg",
        description:"my name is priya.i m currently pursuing bachelors in information technology engineering"
    }, 
    {
        profileImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-518361844-1551386275.jpg?crop=0.671xw:1.00xh;0.305xw,0&resize=640:*",
        username: "loki",
        description:"my name is priya.i m currently pursuing bachelors in information technology engineering"
    }, 
    
    {
        profileImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-518361844-1551386275.jpg?crop=0.671xw:1.00xh;0.305xw,0&resize=640:*",
        username: "anujalandge",
        description:"my name is priya.i m currently pursuing bachelors in information technology engineering"
    }, 
    {
        profileImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-518361844-1551386275.jpg?crop=0.671xw:1.00xh;0.305xw,0&resize=640:*",
        username: "tejaswi jadhaav",
        description:"my name is priya.i m currently pursuing bachelors in information technology engineering"
    }


]

const Community =(props) =>{
    const [postArray,setPostArray] = useState([json[0]]);
    const addPost = (post) => {
        setPostArray();
    }
    return( 
        <div className="Community"> 
        <Navbar/>
        <div className="communityPostContainer">
            <CommunityPostButton/>
        {
            postArray.map(post => 
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
    );
}

export default Community;