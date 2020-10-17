import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogItem from "./Components/Dialogs/DialogItem/DialogItem";
import {BrowserRouter,Route} from "react-router-dom";

const App = (props) => {


    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path='/new' render={ () => <News/>}/>
                    <Route path='/muz' render={ () => <Music/>}/>
                    <Route path='/set' render={ () => <Settings/>}/>

                </div>
            </div>
    )
}

export default App;