import "./CommunityPostButton.css"
import Popup from "reactjs-popup";
import CommnunityPostForm from "./CommunityPostForm.jsx";

const CommunityPostButton = (props) => {
    return (

        <div className="CommunityPostButton">
            <img className="profilePic" style={{ width: "50px", borderRadius: "50px" }} src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png" alt="progile" />

            <Popup trigger={<button className="BtnCommunityPost">Start a post</button>} modal>
                {close => (
                    <div>
                        <CommnunityPostForm close={close}/>
                    </div>
                )}
                
            </Popup>

        </div>
    );


}

export default CommunityPostButton;