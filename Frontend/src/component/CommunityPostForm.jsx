import { useContext, useState } from "react";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";
import "./CommunityPostForm.css";


const CommnunityPostForm = (props) => {
  const currentUser = useContext(CurrentUserContext).state.User;
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          setSelectedImage(e.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    }
  }

  const removeSelectedImage = (event) => {
    event.preventDefault();
    console.log(document.querySelector("#imageAttachment").files);
    setSelectedImage(undefined);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract TextContent and ImageContent from form
    const {TextContent, ImageContent} = event.target

    // Create Form Data to send with request
    const data = new FormData();
    data.append("ImageContent",ImageContent.files[0]);
    data.append("TextContent",TextContent.value);
    data.append("UserID", currentUser._id);
    data.append("PostDate", Date.now());

    try {
      const PostResponse = await fetch("http://localhost:3001/community/createPost", {
        method: "POST",
        credentials: "include",
        body: data
      });
      const ResponseJson = await PostResponse.json();
      console.log("Post:", ResponseJson);
    } catch (error) {
      
    }
  }

  console.log("CommunityPostForm",currentUser);
  return (
    <div className="cmfContainer">
      <form onSubmit={handleSubmit} className="CommnunityPostForm">
        <div className="formHeader">Create Post
          <a className="close bi bi-x-square" onClick={props.close}>
          </a>
        </div>
        <div className="userDetail">
          <img
            src={currentUser.ProfilePicture}
            alt=""
            id="userImage"
          />
          <h3 className="username">{currentUser.FullName}</h3>
        </div>
        <div className="writeContent">
          <textarea
            placeholder="What do you want to talk about ?"
            name="TextContent"
            id=""
            rows="5"
          ></textarea>
          <img src={selectedImage}/>
        </div>
        <div className="actionButton">
        
          <input name="ImageContent" onChange={handleImageChange} type={"file"} hidden id="imageAttachment"></input>
          {
            !selectedImage ? 
              <label for="imageAttachment" id="uploadPicture" class="bi bi-image"><span>Image</span></label>
            : <label onClick={removeSelectedImage}>Remove Image</label>
          }
          
          <button type="submit" id="btnPost">Post</button>
        </div>
      </form>
    </div>

  );
};

export default CommnunityPostForm;
