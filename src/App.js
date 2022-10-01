import logo from './images/home_object.svg';
import Home from "./pages/Home.jsx"
import Career from './pages/Career';
import Event from './pages/Event.jsx';
import Community from './pages/community.jsx';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
