import logo from './images/home_object.svg';
import Home from "./pages/Home.jsx"
import Career from './pages/Career';
import Event from './pages/Event.jsx';
import Community from './pages/community.jsx';
import Login from "./pages/Login";
import Register from "./pages/Register";
import InviteAlumni from './pages/Admin/InviteAumni.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='event' element={<Event/>}/>
          <Route path='community' element={<Community/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Register' element={<Register/>}/>

          <Route path='/admin/inviteAlumni' element={<InviteAlumni/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
