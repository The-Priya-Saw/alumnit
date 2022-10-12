import logo from './images/home_object.svg';
import Home from "./pages/Home.jsx"
import Career from './pages/Career';
import Event from './pages/Event.jsx';
import Community from './pages/community.jsx';
import Login from "./pages/Login";
import Register from "./pages/Register";
import InviteAlumni from './pages/Admin/InviteAumni.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useEffect } from 'react';
import { useContext } from "react";
import CurrentUserContext from "./context/LoggedInUser/CurrentUserContext.js";
import CommunityPostsState from "./context/CommunityPost/CommunityPostsState";


function App() {
  const currentUser = useContext(CurrentUserContext);
  useEffect(()=>{
    const getUser = async() => {
      const userResponse = await fetch("http://localhost:3001/checkUser",{
        method: "GET",
        credentials: "include"
      });
      if(userResponse.status === 200){
        const userJson = await userResponse.json();
        await currentUser.setState(userJson);
      }else{
        currentUser.setState(undefined);
      }
      
    }
    getUser();
    console.log("Effect");

  },[]);
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='event' element={<Event/>}/>
            <Route path='community' element={<CommunityPostsState><Community/></CommunityPostsState> }/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Register' element={<Register/>}/>

            <Route path='/admin/inviteAlumni' element={<InviteAlumni/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
