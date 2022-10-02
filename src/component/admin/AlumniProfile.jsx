import "./AlumniProfile.css"
const AlumniProfile = (props) => {
    let profile = props.profile;
    return <div className="AlumniProfile">
        <div id="personalDetails">
            <img src={profile.profileImg}></img>
            <div>
                <div id="fullName">{profile.fullName}</div>
                <div id="title">{profile.title}</div>
                <div id="location">{profile.location}</div>
            </div>

        </div>
        <div id="education">
                <h3>Education</h3>

            </div>
    </div>
}

export default AlumniProfile;