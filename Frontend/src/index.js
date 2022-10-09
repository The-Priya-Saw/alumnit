import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css";
import CurrentUserState from './context/LoggedInUser/CurrentUserState';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env)
root.render(
    <CurrentUserState>    
        <App />
    </CurrentUserState>
);

