import "./AlumniShortProfile.css";

const AlumniShortProfile = (props) => {
    const profile = props.profile;
    const handleClick = () => {
        props.selectedProfile.setViewSelectedProfile(profile)
    }

    return <div onClick={handleClick} className="AlumniShortProfile">
        <input onChange={e => props.handleCheckbox(e, props)} name="selected" type="checkbox"/>
        <div className="alumniShortProfileDetail">
            <img className="alumniProfilePicture" src={profile.profileImg}/>
            <div className="text-details">
                <div className="fullName">{profile.fullName}</div>
                <div className="title">{profile.title}</div>
                <div className="college">{props.college}</div>
            </div>
        </div>
        <button className="btnAction">{profile.isConnected ? "Message" : "Invite"}</button>
    </div>
}

export default AlumniShortProfile;