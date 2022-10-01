import Navbar from "../../component/Navbar";
import "./InviteAlumni.css";

const InviteAlumni = (props) => {

    return (
        <div className="InviteAlumni">
            <Navbar isAdmin={true} isLogin={true} />
            <div className="AlumniContainer">

                <div className="SearchAlumni">
                   <input type="search" placeholder="Search"/>
                   

                </div>

                <div className="DisplayAlumni">
                    <h1>No Profile is selected</h1>
                </div>

            </div>
        </div>
    );
}
export default InviteAlumni;