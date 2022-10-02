import {useState} from "react";
import Navbar from "../../component/Navbar";
import "./InviteAlumni.css";
import AlumniShortProfile from "../../component/admin/AlumniShortProfile";

import AlumniProfile from "../../component/admin/AlumniProfile";
import dummyJSON from "./dummy";


const InviteAlumni = (props) => {
    //TODO: Implement toggle send button when no item is selected
    const [searchTerm,setSearchTerm] = useState("");
    const [isSelected,setSelected] = useState();
    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(e.target)
    }

    const onSearch = (e) => {
        alert(searchTerm);
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
                        {[1,2,3,4,5,6,7,8,9,0,0].map((a, index) =>
                            <AlumniShortProfile
                                isSelected={isSelected}
                                setSelected={setSelected}
                                fullName="Lorem Ipsum"
                                college="BVCOENM 2019 - 2021"
                                title="Sr Engineer at Tata Consulting Engineers"
                                imgUrl="https://picsum.photos/50"
                                isConnected={index % 2 == 0}
                            />
                        )}

                    </div>
                </div>

                <div className="DisplayAlumni">
                    <AlumniProfile profile={dummyJSON[0]}/>
                </div>

            </div>
        </div>
    );
}
export default InviteAlumni;