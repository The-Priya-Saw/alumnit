import "./AlumniShortProfile.css";

const AlumniShortProfile = (props) => {
    const handleCheckbox = (e) => {
        props.setSelected(e.target.checked)
    }
    return <div className="AlumniShortProfile">
        <input onChange={handleCheckbox} name="selected" type="checkbox"/>
        <div className="alumniShortProfileDetail">
            <img className="alumniProfilePicture" src={props.imgUrl}/>
            <div className="text-details">
                <div className="fullName">{props.fullName}</div>
                <div className="title">{props.title}</div>
                <div className="college">{props.college}</div>
            </div>
        </div>
        <button className="btnAction">{props.isConnected ? "Message" : "Invite"}</button>
    </div>
}

export default AlumniShortProfile;