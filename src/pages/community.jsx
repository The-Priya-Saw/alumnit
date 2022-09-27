import AlumnITLogo from "../images/alumnit_logo.svg";
import Navbar from  "../component/Navbar.jsx";

const Community =(props) =>{

    return( 
        <div className="Community"> 
        <Navbar/>
        <div className="PostCard">
            <div className="CardHeader">
                <img className="profilePic" src="" alt="" />
                <h1 className="postHeader">Post Heading</h1>
            </div>
            <div className="PostContent">
                <img className="PostImage" src=""></img>
                <div className="PostDecription" src=""></div>
                <div className="ActionButton"></div>
            </div>
        </div>
       </div>
    );
}

export default Community;