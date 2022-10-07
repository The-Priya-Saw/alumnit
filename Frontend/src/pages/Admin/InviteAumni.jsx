import {useState, useEffect} from "react";
import Navbar from "../../component/Navbar";
import "./InviteAlumni.css";
import AlumniShortProfile from "../../component/admin/AlumniShortProfile";
import AlumniProfile from "../../component/admin/AlumniProfile";


const InviteAlumni = (props) => {
    //TODO: Implement toggle send button when no item is selected
    const [searchTerm,setSearchTerm] = useState("");
    const [isSelected,setSelected] = useState();
    const [resultProfiles, setResultProfiles] = useState([]);

    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(e.target)
    }

    const onSearch = async (e) => {
        const urlsResponse = await fetch("http://localhost:3002/extractUrls", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                keyword: searchTerm
            })
        });
        const urlResJson = await urlsResponse.json();
        console.log(urlResJson);

        const profilesResponse = await fetch("http://localhost:3002/getProfiles", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                profileUrls: urlResJson
            })
        });
        const profilesResJson = await profilesResponse.json();
        console.log(profilesResJson);
        setResultProfiles(profilesResJson);

    }
    return (
        <div className="InviteAlumni">
            <Navbar isAdmin={true} isLogin={true} />
            <div className="AlumniContainer">

                <div className="SearchAlumni">
                    <div className="divSearchBox">
                        <input onChange={onSearchTermChange} value={searchTerm} id="alumnisearchbox" type="search" placeholder="Search" />
                        <button onClick={onSearch} id="btnSearch">Search</button>
                        <button onClick={onSearch} disabled={!isSelected} id="btnSend">Send</button>
                    </div>
                    <div className="searchResults">
                        {resultProfiles.map((profile, index) =>
                            <AlumniShortProfile
                                isSelected={isSelected}
                                setSelected={setSelected}
                                fullName={profile.fullName}
                                college="BVCOENM 2019 - 2021"
                                title={profile.title}
                                imgUrl={profile.profileImg}
                                isConnected={profile.isConnected}
                            />
                        )}

                    </div>
                </div>

                <div className="DisplayAlumni">
                    {resultProfiles[0] ? <AlumniProfile profile={resultProfiles[0]}/> : ""}
                    
                </div>

            </div>
        </div>
    );
}
export default InviteAlumni;