import { useContext } from "react";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";
import "./CommunityPostForm.css";


const CommnunityPostForm = (props) => {
  const currentUser = useContext(CurrentUserContext).state.User;
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"/>
        </div>
        <div className="actionButton">
          <i id="uploadPicture" class="bi bi-image"></i>
          <button id="btnPost">Post</button>
        </div>
      </div>
    </div>

  );
};

export default CommnunityPostForm;
