import "./CommunityPostButton.css"
import Popup from "reactjs-popup";
import CommnunityPostForm from "./CommunityPostForm.jsx";

const CommunityPostButton = (props) => {
    return (

        <div className="CommunityPostButton">
            <img className="profilePic" style={{ width: "50px", borderRadius: "50px" }} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-518361844-1551386275.jpg?crop=0.671xw:1.00xh;0.305xw,0&resize=640:*" alt="progile" />

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