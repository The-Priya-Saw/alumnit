import "./admin/AlumniProfile.css";

const UserProfile = (props) => {
    let profile = props.profile;
    return <div className="AlumniProfile">
        <div id="personalDetails">
            <div>
                <div id="fullName">
                <img src={profile.profileImg}></img>
                    {profile.fullName}
                </div>
                <div id="title"><strong>Title:</strong> {profile.title}</div>
                <div id="location"><strong>Location:</strong> {profile.location}</div>
            </div>

        </div>
    </div>
}

export default UserProfile