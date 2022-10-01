import Navbar from "../../component/Navbar";
import "./InviteAlumni.css";
import AlumniShortProfile from "../../component/admin/AlumniShortProfile";

const InviteAlumni = (props) => {

    return (
        <div className="InviteAlumni">
            <Navbar isAdmin={true} isLogin={true} />
            <div className="AlumniContainer">

                <div className="SearchAlumni">
                    <div className="divSearchBox">
                        <input id="alumnisearchbox" type="search" placeholder="Search" />
                        <button id="btnSearch">Search</button>
                    </div>
                    <div className="searchResults">
                    {[1,1,1,1,1,1,1,1,1,].map((a,index) => 
                        <AlumniShortProfile 
                            fullName="Lorem Ipsum"
                            college="BVCOENM 2019 - 2021"
                            title="Sr Engineer at Tata Consulting Engineers"
                            imgUrl="https://picsum.photos/50"
                            isConnected={index%2 == 0}
                        />
                    )}

                    </div>
                </div>

                <div className="DisplayAlumni">
                    <h1>No Profile is selected</h1>
                </div>

            </div>
        </div>
    );
}
export default InviteAlumni;