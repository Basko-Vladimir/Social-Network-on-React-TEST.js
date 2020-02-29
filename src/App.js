import React from 'react';
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeadContainer";


const App = () => {
    return (
        <div className='root'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="root-content">
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' render={() => <UserContainer/>}/>
            </div>
        </div>
    );
};

export default App;
