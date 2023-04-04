import { useState, useEffect, useContext } from "react";
import Navbar from "../../component/Navbar";
import "./InviteAlumni.css";
import AlumniShortProfile from "../../component/admin/AlumniShortProfile";
import AlumniProfile from "../../component/admin/AlumniProfile";
import dummy from "./dummy";
import Popup from "reactjs-popup";
import CustomPostForm from "../../component/CareerPostForm.jsx";
import CurrentUserContext from "../../context/LoggedInUser/CurrentUserContext";

const InviteAlumni = (props) => {
  const [searchTerm, setSearchTerm] = useState(""); //Hold search term
  const [isSelected, setSelected] = useState(); //To toggle send button
  const [selectionArray, updateSelectionArray] = useState([]); //e.g[true,false,false]
  const [selectedProfiles, updateSelectedProfiles] = useState([]);
  const [resultProfiles, setResultProfiles] = useState([]);
  const [viewSelectedProfile, setViewSelectedProfile] = useState(undefined);
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    const authenticate = async () => {
      const response = await fetch("http://localhost:3001/checkUser", {
        method: "GET",
        credentials: "include",
      });
      const eventPostsJson = await response.json();
      if (eventPostsJson.error) {
        window.location = "/";
      }
      // if(currentUser.state && currentUser.state.User){
      //     if(!currentUser.state.User.isAdmin){
      //         alert("Restricted Access");
      //         // window.location = "/"
      //     }else{
      //         alert("Access Granted")
      //     }
      // }else{
      //     alert("Restricted Access");
      //     // window.location = "/"
      // }
      if (!eventPostsJson.User.isAdmin) {
        console.log("Restricted Access", eventPostsJson);
        window.location = "/";
      } else {
        console.log("Access Granted");
      }
    };
    authenticate();
  }, []);

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target);
  };

  const onSearch = async (e) => {
    updateSelectedProfiles([]);
    const urlsResponse = await fetch("http://localhost:3002/extractUrls", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: searchTerm,
      }),
    });
    const urlResJson = await urlsResponse.json();
    console.log(urlResJson);

    const profilesResponse = await fetch("http://localhost:3002/getProfiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profileUrls: urlResJson,
      }),
    });
    const profilesResJson = await profilesResponse.json();
    console.log(profilesResJson);
    setResultProfiles(profilesResJson);
  };

  const onClickSend = async (e) => {
    e.preventDefault();
    console.log(selectedProfiles);
    const messageTemplate = e.target.messageTemplate.value;
    try {
      const res = await fetch("http://localhost:3002/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profiles: selectedProfiles,
          messageTemplate: messageTemplate,
        }),
      });
      console.log(await res.json());
      alert("done");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const InviteNote = (props) => {
    return (
      <form
        onSubmit={async (e) => {
          await onClickSend(e);
          props.close();
        }}
        className="InviteNote"
      >
        <a className="close bi bi-x-square" style={{ textAlign: "end" }} onClick={props.close}></a>
        <h5>Invite Note</h5>
        <p>Max 285 characters and use #$ for replacing full name</p>
        <textarea name="messageTemplate" rows={4} maxLength="285"></textarea>
        <button id="btnInviteNoteSend">Send</button>
      </form>
    );
  };

  const handleCheckbox = (e, props) => {
    selectionArray[props.index] = e.target.checked;
    updateSelectionArray(selectionArray);
    if (e.target.checked) {
      selectedProfiles.push(props.profile);
      updateSelectedProfiles(selectedProfiles);
    } else {
      updateSelectedProfiles(selectedProfiles.filter((x) => x != props.profile));
    }
    setSelected(selectionArray.indexOf(true) > -1);
  };

  return (
    <div className="InviteAlumni">
      <Navbar isAdmin={true} isLogin={true} />
      {currentUser.state && currentUser.state.User && currentUser.state.User.isAdmin ? (
        <div className="AlumniContainer">
          <div className="SearchAlumni">
            <div className="divSearchBox">
              <input
                onChange={onSearchTermChange}
                value={searchTerm}
                id="alumnisearchbox"
                type="search"
                placeholder="Search name"
              />
              <button onClick={onSearch} id="btnSearch">
                Search
              </button>
              {/* <button onClick={onClickSend} disabled={!isSelected} id="btnSend">Send</button> */}
              <Popup
                trigger={
                  <button disabled={!isSelected} id="btnSend">
                    Send
                  </button>
                }
                modal
              >
                {/* <CustomPostForm updatePage={setUpdateCount}/> */}
                {(close) => <InviteNote close={close} />}
              </Popup>
            </div>
            <div className="searchResults">
              {resultProfiles.length > 0 ? (
                resultProfiles.map((profile, index) => {
                  return (
                    <AlumniShortProfile
                      key={index}
                      index={index}
                      handleCheckbox={handleCheckbox}
                      college="BVCOENM 2019 - 2021"
                      profile={profile}
                      selectedProfile={{ viewSelectedProfile, setViewSelectedProfile }}
                    />
                  );
                })
              ) : (
                <div className="placeholderDiv">Search Results</div>
              )}
            </div>
          </div>

          <div className="DisplayAlumni">
            {viewSelectedProfile ? (
              <AlumniProfile profile={viewSelectedProfile} />
            ) : (
              <div className="placeholderDiv">No profile is selected</div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InviteAlumni;
