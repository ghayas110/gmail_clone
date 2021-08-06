
import React from 'react';
import './App.css';
import Header from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Mail from './Mail';
import MailList from './MailList';
import SendMail from './SendMail';
import Login from './Login';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user=useSelector(selectUser);
  return (
    <Router>
      {!user?(
        <Login/>
      ):(
        <div className="App">
      <Header/>
      {/* <Side/> */}
       <div className="app__body">
       <Sidebar/>
    
     <Switch>
       <Route path="/mail">
         <Mail/>
       </Route>
       <Route path="/">
         <MailList/>

       </Route>
     </Switch>
     </div>
     {sendMessageIsOpen && <SendMail/>}
     
    </div>
      )}
    
    </Router>
  );
}

export default App;
