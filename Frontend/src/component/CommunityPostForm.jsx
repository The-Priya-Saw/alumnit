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

  console.log("CommunityPostForm",currentUser);
  return (
    <div className="cmfContainer">
      <div className="CommnunityPostForm">
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
            name=""
            id=""
            rows="5"
          ></textarea>
          <img src={selectedImage}/>
        </div>
        <div className="actionButton">
        
          <input onChange={handleImageChange} type={"file"} hidden id="imageAttachment"></input>
          {
            !selectedImage ? 
              <label for="imageAttachment" id="uploadPicture" class="bi bi-image"><span>Image</span></label>
            : <label onClick={removeSelectedImage}>Remove Image</label>
          }
          
          <button id="btnPost">Post</button>
        </div>
      </div>
    </div>

  );
};

export default CommnunityPostForm;
