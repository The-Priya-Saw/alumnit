import {useState, useEffect} from "react";
import Navbar from "../../component/Navbar";
import "./InviteAlumni.css";
import AlumniShortProfile from "../../component/admin/AlumniShortProfile";
import AlumniProfile from "../../component/admin/AlumniProfile";
import dummy from "./dummy";
import Popup from "reactjs-popup";
import CustomPostForm from "../../component/CareerPostForm.jsx";


const InviteAlumni = (props) => {
    const [searchTerm,setSearchTerm] = useState("");//Hold search term
    const [isSelected,setSelected] = useState();//To toggle send button
    const [selectionArray, updateSelectionArray] = useState([]);//e.g[true,false,false]
    const [selectedProfiles, updateSelectedProfiles] = useState([]);
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

    const onClickSend = async (e) => {
        console.log(selectedProfiles);

        // TODO
        // try {
        //     const res = await fetch("http://localhost:3002/invite",{
        //         method: "POST",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify({
        //             profiles: selectedProfiles
        //         })
        //     })
        //     console.log(await res.json())
        //     alert("done");
        // } catch (error) {
        //     alert(error)
        // }
    }

    const handleCheckbox = (e, props) => {

        selectionArray[props.index] = e.target.checked;
        updateSelectionArray(selectionArray);
        if(e.target.checked){
            selectedProfiles.push(props.profile);
            updateSelectedProfiles(selectedProfiles);

        }else{
            updateSelectedProfiles(selectedProfiles.filter(x => x!=props.profile))

        }
        setSelected(selectionArray.indexOf(true) > -1);
    }



    return (
        <div className="InviteAlumni">
            <Navbar isAdmin={true} isLogin={true} />
            <div className="AlumniContainer">

                <div className="SearchAlumni">
                    <div className="divSearchBox">
                        <input onChange={onSearchTermChange} value={searchTerm} id="alumnisearchbox" type="search" placeholder="Search" />
                        <button onClick={onSearch} id="btnSearch">Search</button>
                        {/* <button onClick={onClickSend} disabled={!isSelected} id="btnSend">Send</button> */}
                        <Popup trigger={<button onClick={onClickSend} disabled={!isSelected} id="btnSend">Send</button>} modal>
                            {/* <CustomPostForm updatePage={setUpdateCount}/> */}
                            {
                                close => <InviteNote close={close}/>
                                
                            }
                        </Popup>
                    </div>
                    <div className="searchResults">
                        {dummy.map((profile, index) =>{
                            return <AlumniShortProfile
                                key={index}
                                index={index}
                                handleCheckbox={handleCheckbox}
                                college="BVCOENM 2019 - 2021"
                                profile={profile}
                            />
                        }
                            
                        )}

                    </div>
                </div>

                <div className="DisplayAlumni">
                    {dummy[0] ? <AlumniProfile profile={dummy[0]}/> : ""}
                    
                </div>

            </div>
        </div>
    );
}

const InviteNote = (props) => {
    return <div className="InviteNote">
              <a className="close bi bi-x-square" style={{textAlign: "end"}} onClick={props.close}>
          </a>
        <h5>Invite Note</h5>
        <p>Max 285 characters and use %#f%# for replacing full name</p>
        <textarea maxLength="285"></textarea>
        <button id="btnInviteNoteSend">Send</button>
    </div>
}

export default InviteAlumni;