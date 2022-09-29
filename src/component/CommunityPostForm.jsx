import "./CommnunityPostForm.css";

const CommnunityPostForm = (props) => {
  return (
    <div className="cmfContainer">
    <div className="CommnunityPostForm">
      <div className="formHeader">Create Post</div>
      <div className="userDetail">
        <img
          src="https://i.pinimg.com/736x/7b/bb/ef/7bbbef1aba33e4db581700e7cfebb1c4.jpg"
          alt=""
          id="userImage"
        />
        <h3 className="username">Devi Vishwakumar</h3>
      </div>
      <div className="writeContent">
        <textarea
          placeholder="What do you want to talk about ?"
          name=""
          id=""
          rows="10"
        ></textarea>
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
